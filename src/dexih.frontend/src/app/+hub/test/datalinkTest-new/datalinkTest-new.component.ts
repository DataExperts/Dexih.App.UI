import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HubService } from '../../hub.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Location } from '@angular/common';
import { HubCache, eCacheStatus } from '../../hub.models';
import { DexihConnection, DexihDatalink, eConnectionPurpose } from '../../../shared/shared.models';

@Component({

  selector: 'dexih-datalinkTest-new-form',
  templateUrl: './datalinkTest-new.component.html'
})
export class DatalinkTestNewComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  private _valueChangesSubscription: Subscription;

  private hubCache: HubCache;

  public pageTitle: string;

  hasChanged = false;
  showAllErrors = false;

  public name: string;
  public auditConnectionKey: number;
  public sourceConnectionKey: number;
  public targetConnectionKey: number;

  public managedConnections: Array<DexihConnection>;

  public sourceDatalinkKeys: Array<number>;
  public sourceDatalinks: Array<DexihDatalink>;

  public saving = false;

  mainForm: FormGroup;

  formErrors = {
    'name': '',
    'auditConnectionKey': '',
    'sourceConnectionKey': '',
    'targetConnectionKey': '',
    'snapshotData': '',
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.',
    },
    'auditConnectionKey': {
    },
    'targetConnectionKey': {
    },
    'sourceConnectionKey': {
    },
    'snapshotData': {
    },
  };


  constructor(
    private hubService: HubService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder) {
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

        this.managedConnections = this.hubCache.hub.dexihConnections
          .filter(c => c.purpose === eConnectionPurpose.Managed)

        if (this.hubCache.status = eCacheStatus.Loaded) {
          let datalinkKeys: string = params['datalinkKeys'];
          this.sourceDatalinkKeys = new Array<number>();
          this.sourceDatalinks = new Array<DexihDatalink>();

          if (datalinkKeys && this.hubCache.hub.dexihConnections) {
            let datalinkKeyArray = datalinkKeys.split('|');
            this.hubCache.hub.dexihDatalinks.forEach(datalink => {
              if (datalinkKeyArray.findIndex(t => t === datalink.key.toString()) >= 0) {
                this.sourceDatalinkKeys.push(datalink.key);
                this.sourceDatalinks.push(datalink);
              }
            });
          }

          let targetConnection = this.hubCache.hub.dexihConnections.find(c => c.purpose === eConnectionPurpose.Managed);
          if (targetConnection) {
            this.targetConnectionKey = targetConnection.key;
          }
          this.sourceConnectionKey = this.targetConnectionKey;
          this.auditConnectionKey = this.targetConnectionKey;

          this.buildForm();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Datalink New');
    }


  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
  }

  buildForm(): void {
    this.mainForm = this.fb.group({
      'name': [this.name, [
      ]],
      'auditConnectionKey': [this.auditConnectionKey > 0 ? this.auditConnectionKey : null, [
        // Validators.required,
      ]],
      'targetConnectionKey': [this.targetConnectionKey > 0 ? this.targetConnectionKey : null, [
        // Validators.required,
      ]],
      'sourceConnectionKey': [this.sourceConnectionKey > 0 ? this.sourceConnectionKey : null, [
        // Validators.required,
      ]],
      'snapshotData': [true, [
        // Validators.required,
      ]],
    });

    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
    this.hasChanged = false;
  }

  onValueChanged(data?: any) {
    if (!this.mainForm) { return; }
    const form = this.mainForm;

    this.hasChanged = true;

    for (const field of Object.keys(this.formErrors)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || this.showAllErrors) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key of Object.keys(control.errors)) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  save() {
    if (this.mainForm.valid) {
      let value = this.mainForm.value;
      this.saving = true;
      this.hubService.newDatalinkTest(
        this.name,
        this.sourceDatalinkKeys,
        value.auditConnectionKey,
        value.targetConnectionKey,
        value.sourceConnectionKey,
        value.snapshotData
      ).then(result => {
          this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'datalinkTests', 'datalinkTest-edit', result.key],
            { relativeTo: this.route.root });
      }).catch(reason => {
        this.saving = false;
      });
    } else {
      this.showAllErrors = true;
      this.onValueChanged();
    }
  }

  cancel() {
    this.location.back();
  }
}
