import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  DexihDatajob, HubCache,
  eCacheStatus
} from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';

@Component({
  selector: 'dexih-datajob-edit-form',
  templateUrl: './datajob-edit.component.html'
})
export class DatajobEditComponent implements OnInit, OnDestroy {
  public datajobKey: number;

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

        if (!this.hubCache.isLoaded() || this.isLoaded) { return; }

        this.isLoaded = true;

        if (this.action === 'edit') {
          // get the hub key from the route data, and update the service.
          this.datajobKey = + params['datajobKey'];

          if (!this.datajobKey) {
            this.hubService.addHubErrorMessage('There was no datajob specified to edit.');
          } else {
            if (!this.hubCache.hub || !this.hubCache.hub.dexihDatajobs) {
              this.hubService.addHubErrorMessage('The hub cache is not loaded.');
            } else {

              let datajob = this.hubCache.hub.dexihDatajobs.find(c => c.key === this.datajobKey);
              if (!datajob) {
                this.hubService.addHubErrorMessage('The specified datajob could not be found.');
              } else {
                this.formsService.datajob(datajob);
              }
            }
          }
        }

        if (this.action === 'new') {
          let datajob: DexihDatajob;
          if (this.hubService.newDatajob) {
            datajob = this.hubService.newDatajob;
            this.hubService.newDatajob = null;
          } else {
            datajob = this.hubService.createDefaultDatajob();
            datajob.key = 0;
          }

          this.formsService.datajob(datajob);

          // update the url with the saved key
          this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
            let key = form.controls.key.value;
            if (key) {
              if (history.pushState) {
                let newUrl = window.location.pathname.replace('/datajob-new', `/datajob-edit/${key}`)
                this.router.navigateByUrl(newUrl);
                this._formChangeSubscription.unsubscribe();
              }
            }
          });
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Datajob Edit');
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
          'The datajob changes have not been saved.  Do you want to discard the changes and exit?')
          .then(() => {
              resolve(true);
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
      $event.returnValue = 'The datajob changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
