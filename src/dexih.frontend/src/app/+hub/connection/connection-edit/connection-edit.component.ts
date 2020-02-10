import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubCache, eCacheStatus } from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { LogFactory, eLogLevel } from '../../../../logging';
import { eConnectionPurpose, eConnectionCategory, ConnectionReference, DexihConnection, RemoteLibraries, eConnectionPurposeItems } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({

  selector: 'dexih-connection-edit-form',
  templateUrl: './connection-edit.component.html',
  providers: [HubFormsService]
})
export class ConnectionEditComponent implements OnInit, OnDestroy {

  public connectionKey: number;
  private connectionTypes: Array<ConnectionReference>;
  private hubCache: HubCache;
  private remoteLibraries: RemoteLibraries;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _purposeSubscription: Subscription;

  public savingConnection = false;
  public refreshingConnection = false;
  public revealingConnectionString = false;
  public creatingDatabase = false;

  public databases: Array<string> = [];

  public eConnectionPurposeItems = eConnectionPurposeItems.filter( c => c.key > 0);
  public eConnectionPurpose = eConnectionPurpose;
  public eConnectionCategory = eConnectionCategory;

  public cancelToken: CancelToken = new CancelToken();

  public connectionReference: ConnectionReference;
  private isLoaded = false;

  public variables = [];

  private logger = new LogFactory('connection-edit');

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
        this.hubService.getRemoteLibrariesObservable()
      ).subscribe(async result => {
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];
        this.remoteLibraries = result[3];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (!this.hubCache.isLoaded()) {
          return;
        }

        this.variables = this.hubCache.hub.dexihHubVariables.map(c => '{' + c.name + '}');

          if (!this.remoteLibraries || !this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
          this.isLoaded = true;

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.connectionKey = + params['connectionKey'];

            this.logger.LogC(() => `edit connection key ${this.connectionKey}.`, eLogLevel.Trace);

            if (!this.connectionKey) {
              this.hubService.addHubErrorMessage('There was no connection specified to edit.');
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihConnections) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {
                let connection = this.hubCache.hub.dexihConnections.find(c => c.key === this.connectionKey);
                if (!connection) {
                  this.hubService.addHubErrorMessage('The specified connection could not be found.');
                  this.logger.LogC(() => `edit connection with key ${this.connectionKey} not found.`, eLogLevel.Warning);
                } else {
                  this.updateDatabaseTypes(connection.purpose);
                  this.connectionReference = await this.hubService.GetConnectionReference(connection);
                  this.formsService.connection(connection);
                  if (connection.defaultDatabase) {
                    this.databases = [connection.defaultDatabase];
                  }
                  this.logger.LogC(() => `edit connection, form loaded.`, eLogLevel.Trace);
                }
              }
            }
          }

          if (this.action === 'new') {
            let connection = new DexihConnection();
            connection.purpose = +params['purpose'];

            this.logger.LogC(() => `new connection, purpose ${connection.purpose}.`, eLogLevel.Trace);

            this.updateDatabaseTypes(connection.purpose);
            this.formsService.connection(connection);

            this.updateUrl();

            this.logger.LogC(() => `new connection, form loaded.`, eLogLevel.Trace);
          }

          if (this.action === 'copy') {

            let connection = new DexihConnection();

            let previousConnectionKey = + params['connectionKey'];
            let previousConnection = this.hubCache.hub.dexihConnections.find(c => c.key === previousConnectionKey);
            Object.assign(connection, previousConnection);
            connection.name += ' (copy)';
            connection.key = null;
            this.connectionReference = await this.hubService.GetConnectionReference(connection);

            this.logger.LogC(() => `copy connection, connectionKey ${previousConnectionKey}.`, eLogLevel.Trace);
            this.updateDatabaseTypes(connection.purpose);
            this.formsService.connection(connection);

            this.updateUrl();

            this.logger.LogC(() => `new connection, form loaded.`, eLogLevel.Trace);
          }

          this._purposeSubscription = this.formsService.currentForm.controls.purpose.valueChanges.subscribe(purpose => {
              this.updateDatabaseTypes(purpose);
          });
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Connection Edit');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._purposeSubscription) { this._purposeSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  private updateUrl() {
      // update the url with the saved key
      this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
        let key = form.controls.key.value;
        if (key) {
          if (history.pushState) {
            let url = window.location.pathname;
            let index = url.indexOf('/connection-new');
            if (index > 0) {
              let newUrl = url.substr(0, index) + `/connection-edit/${key}`;
              this.router.navigateByUrl(newUrl);
            }
            this._formChangeSubscription.unsubscribe();
          }
        }
      });
  }

  private updateDatabaseTypes(purpose: eConnectionPurpose) {
    this.connectionTypes = this.remoteLibraries.connections.filter(d =>
      (purpose === eConnectionPurpose.Source && d.allowsSourceConnection) ||
      (purpose === eConnectionPurpose.Managed && d.allowsManagedConnection) ||
      (purpose === eConnectionPurpose.Target && d.allowsTargetConnection));
  }

  async selectDatabaseType(connectionReference: ConnectionReference) {
    this.formsService.currentForm.controls.connectionClassName.setValue(connectionReference.connectionClassName);
    this.formsService.currentForm.controls.connectionAssemblyName.setValue(connectionReference.connectionAssemblyName);

    // For integration hub connections, pre-fill some information.
    if (this.connectionReference.connectionCategory === eConnectionCategory.Hub) {
      if (!this.formsService.currentForm.controls.server.value) {
        const uri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        this.formsService.currentForm.controls.server.setValue(uri);
      }
      if (!this.formsService.currentForm.controls.username.value) {
        const user = this.authService.getUser()
        if (user) {
          this.formsService.currentForm.controls.username.setValue(user.email);
        }
      }
    }
  }

  connectionStringChanged() {
    this.logger.LogC(() => `connectionStringChanged.`, eLogLevel.Trace);
    if (this.formsService.currentForm.controls.connectionString.value) {
      this.formsService.currentForm.controls.connectionString.setValue(null);
      this.formsService.currentForm.controls.connectionStringDisplay.setValue('');
    }
  }

  clearConnectionString() {
    this.formsService.currentForm.controls.connectionString.setValue(null);
    this.formsService.currentForm.controls.connectionStringDisplay.setValue('');
  }

  revealConnectionString() {
    this.logger.LogC(() => `revealConnectionString.`, eLogLevel.Trace);
    this.revealingConnectionString = true;

    this.hubService.decrypt(this.formsService.currentForm.controls.connectionString.value, this.cancelToken)
      .then(result => {
        this.formsService.currentForm.controls.connectionStringDisplay.setValue(result);
        this.revealingConnectionString = false;
      }).catch(reason => {
        this.hubService.addHubMessage(reason);
        this.revealingConnectionString = false;
      });
  }

  passwordChanged() {
    this.logger.LogC(() => `passwordChanged.`, eLogLevel.Trace);

    if (this.formsService.currentForm.controls.password.value) {
      this.formsService.currentForm.controls.password.setValue(null);
      this.formsService.currentForm.controls.passwordDisplay.setValue('');
    }
  }

  clearPassword() {
    this.formsService.currentForm.controls.password.setValue(null);
    this.formsService.currentForm.controls.passwordDisplay.setValue('');
  }

  async refreshConnection() {
    this.logger.LogC(() => `refreshConnection.`, eLogLevel.Trace);

    await this.encryptConnection();

    this.refreshingConnection = true;
    this.hubService.refreshConnection(this.formsService.currentForm.value, this.cancelToken)
      .then(result => {
        this.hubService.addHubSuccessMessage('The connection was successful.');
        this.databases = result;
        this.refreshingConnection = false;
      }).catch(reason => {
        this.hubService.addHubMessage(reason);
        this.refreshingConnection = false;
      });
  }

  newDatabaseName(value: string) {
    this.formsService.currentForm.controls.defaultDatabase.setValue(value);
  }

  createDatabase() {
    this.creatingDatabase = true;

    this.authService.promptDialog('Create Database', 'Enter the name for the new database?').then(async result => {
      if (result) {
        await this.encryptConnection();

        let connection = Object.assign({}, this.formsService.currentForm.value);
        connection.defaultDatabase = result;

        this.hubService.createDatabase(connection, this.cancelToken)
          .then(() => {
            this.hubService.addHubSuccessMessage('The database was created successfully.');
            this.databases = [result];
            this.formsService.currentForm.controls.defaultDatabase.setValue(result);
            this.creatingDatabase = false;
          }).catch(reason => {
            this.hubService.addHubMessage(reason);
            this.creatingDatabase = false;
          });
      } else {
        this.creatingDatabase = false;
      }
    }).catch(() => {
      this.creatingDatabase = false;
    });
  }

  async encryptConnection() {
    let form = this.formsService.currentForm;

    let passwordRaw = form.controls.passwordRaw.value;
    if (passwordRaw) {
      let password = await this.hubService.encrypt(passwordRaw, this.cancelToken);
      form.controls.password.setValue(password);
      form.controls.passwordRaw.setValue(null);
    }

    let connectionStringRaw = form.controls.connectionStringRaw.value;
    if (connectionStringRaw) {
      let connectionString = await this.hubService.encrypt(connectionStringRaw, this.cancelToken);
      form.controls.connectionString.setValue(connectionString);
      form.controls.connectionStringRaw.setValue(null);
    }
  }

  async save() {
    await this.encryptConnection();
    await this.formsService.save();
  }

  close() {
    this.authService.navigateUp();
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The connection has not been saved',
          'The connection changes have not been saved.  Do you want to discard the changes and exit?')
          .then((confirm) => {
              resolve(confirm);
            }).catch(() => {
              resolve(false);
            });
      } else {
        resolve(true);
      }
    });
  }

  // @HostListener allows is to guard against browser refresh, close, etc.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.formsService.hasChanged) {
      $event.returnValue = 'The connection changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
