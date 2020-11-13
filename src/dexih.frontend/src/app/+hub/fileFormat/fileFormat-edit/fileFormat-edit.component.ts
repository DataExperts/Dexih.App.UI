import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HubService } from '../../hub.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { HubCache, eCacheStatus } from '../../hub.models';
import { DexihFileFormat } from '../../../shared/shared.models';

@Component({
  selector: 'dexih-fileFormat-edit-form',
  templateUrl: './fileFormat-edit.component.html',
  providers: [HubFormsService]
})
export class FileFormatEditComponent implements OnInit, OnDestroy {
  public fileFormatKey: number;

  public hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;
  public params: Params;

  // public parseErrorActions = ParseErrorActions;
  // public missingFieldActions = MissingFieldActions;
  // public valueTrimmingOptions = ValueTrimmingOptions;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;
  private isLoaded = false;

  constructor(
    private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
      ).subscribe(result => {
        let data = result[0];
        this.params = result[1];
        this.hubCache = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded ) { return; }

        if (this.isLoaded && this.action === 'new') { return; }

        if (this.isLoaded && this.formsService.hasChanged) {
            this.authService.confirmDialog('Synchronization warning',
            'The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?')
            .then(confirm => {
                if (confirm) {
                    this.load();
                }
            }).catch(reason => {
                return;
            });
        } else {
            this.load();
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'File Format Edit');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
  }

  load() {

    if (this.hubCache.isLoaded()) {
      if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
      this.isLoaded = true;

      if (this.action === 'edit') {
        // get the hub key from the route data, and update the service.
        this.fileFormatKey = + this.params['fileFormatKey'];

        if (!this.fileFormatKey) {
          this.hubService.addHubErrorMessage('There was no file format specified to edit.');
        } else {
          if (!this.hubCache.hub || !this.hubCache.hub.dexihColumnValidations) {
            this.hubService.addHubErrorMessage('The hub cache is not loaded.');
          } else {

            let fileFormat = this.hubCache.hub.dexihFileFormats.find(c => c.key === this.fileFormatKey);
            this.formsService.fileFormat(fileFormat);
          }
        }
      }

      if (this.action === 'new') {
        let fileFormat = new DexihFileFormat();
        this.formsService.fileFormat(fileFormat);

        // update the url with the saved key
        this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
          let key = form.controls.key.value;
          if (key) {
            if (history.pushState) {
              let newUrl = window.location.pathname.replace('/fileFormat-new', `/fileFormat-edit/${key}`)
              this.router.navigateByUrl(newUrl);
              this._formChangeSubscription.unsubscribe();
            }
          }
        });
      }
    }
  }

  close() {
    this.authService.navigateUp();
  }
}
