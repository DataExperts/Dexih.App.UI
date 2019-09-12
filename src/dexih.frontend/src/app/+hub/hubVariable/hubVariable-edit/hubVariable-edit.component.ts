import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubCache, eCacheStatus } from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { DexihHubVariable } from '../../../shared/shared.models';

@Component({

  selector: 'dexih-hubVariable-edit-form',
  templateUrl: './hubVariable-edit.component.html',
  providers: [HubFormsService]
})
export class HubVariableEditComponent implements OnInit, OnDestroy {

  private hubVariableKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _isEncryptedSubscription: Subscription;
  private isLoaded = false;

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
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

        this.pageTitle = data['pageTitle'];
        this.action = data['action'];


        if (this.hubCache.isLoaded()) {
          if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
          this.isLoaded = true;

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.hubVariableKey = + params['hubVariableKey'];

            if (!this.hubVariableKey) {
              this.hubService.addHubErrorMessage('There was no variable specified to edit.');
              // this.errorMessage = 'There was no validation specified to edit.';
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihHubVariables) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {
                let hubVariable = this.hubCache.hub.dexihHubVariables.find(c => c.key === this.hubVariableKey);
                this.formsService.hubVariable(hubVariable);
              }
            }
          }

          if (this.action === 'new') {
            let hubVariable = new DexihHubVariable();
            hubVariable.value = '';
            hubVariable.name = '';
            this.formsService.hubVariable(hubVariable);

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/hubVariable-new', `/hubVariable-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }

          this._isEncryptedSubscription = this.formsService.currentForm.controls.isEncrypted.valueChanges.subscribe(isEncrypted => {
            if (!isEncrypted) {
              this.formsService.currentForm.controls.valueRaw.setValue('');
            }
          });

        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Variables');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._isEncryptedSubscription) { this._isEncryptedSubscription.unsubscribe(); }
  }

  close() {
    this.authService.navigateUp();
  }

}
