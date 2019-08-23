import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DexihDatalinkTest, HubCache,
  eCacheStatus,
  eImportAction,
  eSharedObjectType
} from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';

@Component({
  selector: 'dexih-datalinkTest-edit-form',
  templateUrl: './datalinkTest-edit.component.html'
})
export class DatalinkTestEditComponent implements OnInit, OnDestroy {
  public datalinkTestKey: number;

  public hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;
  private isLoaded = false;

  constructor(private hubService: HubService,
    public formsService: HubFormsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (this.hubCache.isLoaded()) {
          if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
          this.isLoaded = true;

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.datalinkTestKey = + params['datalinkTestKey'];

            if (!this.datalinkTestKey) {
              this.hubService.addHubErrorMessage('There was no datalink test specified to edit.');
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihDatalinkTests) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {

                let datalinkTest = this.hubCache.hub.dexihDatalinkTests.find(c => c.key === this.datalinkTestKey);
                if (!datalinkTest) {
                  this.hubService.addHubErrorMessage('The specified datalink test could not be found.');
                } else {
                  this.formsService.datalinkTest(datalinkTest);
                }
              }
            }
          }

          if (this.action === 'new') {
              let  datalinkTest = new DexihDatalinkTest();
              datalinkTest.key = 0;
              this.formsService.datalinkTest(datalinkTest);

              // update the url with the saved key
              this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
                let key = form.controls.key.value;
                if (key) {
                  if (history.pushState) {
                    let newUrl = window.location.pathname.replace('/datalinkTest-new', `/datalinkTest-edit/${key}`)
                    this.router.navigateByUrl(newUrl);
                    this._formChangeSubscription.unsubscribe();
                  }
                }
              });
          }
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit');
    }
  }

  ngOnDestroy() {
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }

    this.formsService.ngOnDestroy();
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The data job has not been saved',
          'The datalink test changes have not been saved.  Do you want to discard the changes and exit?')
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
      $event.returnValue = 'The datalink test changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
