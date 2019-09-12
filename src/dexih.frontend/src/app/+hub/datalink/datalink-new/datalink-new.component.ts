import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { HubCache, eCacheStatus } from '../../hub.models';
import { eDatalinkType, DexihConnection, DexihTable, eConnectionPurpose, eDeltaType, eSharedObjectType, eDatalinkTypeItems } from '../../../shared/shared.models';

@Component({

  selector: 'dexih-datalink-new-form',
  templateUrl: './datalink-new.component.html'
})
export class DatalinkNewComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  private _valueChangesSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

  private hubCache: HubCache;

  public pageTitle: string;

  hasChanged = false;
  showAllErrors = false;

  private tableKeys: Array<number>;

  public sourceTableKeys: Array<number>;
  public name: string;
  public datalinkType: eDatalinkType;
  public targetConnectionKey: number;
  public auditConnectionKey: number;
  public addSourceColumns = true;

  public managedTargetConnections: Array<DexihConnection>;
  public managedConnections: Array<DexihConnection>;

  public sourceTables: Array<DexihTable>;

  public eConnectionPurpose = eConnectionPurpose;

  public auditColumnTypes = [
    { key: eDeltaType.AutoIncrement, name: 'Auto Incrementing Key', value: true },
    { key: eDeltaType.IsCurrentField, name: 'Is Current Flag', value: true },
    { key: eDeltaType.Version, name: 'Record Version', value: true },
    { key: eDeltaType.ValidFromDate, name: 'Valid From Date', value: true },
    { key: eDeltaType.ValidToDate, name: 'Valid To Date', value: true },
    { key: eDeltaType.CreateDate, name: 'Created Date', value: true },
    { key: eDeltaType.UpdateDate, name: 'Updated Date', value: true },
    { key: eDeltaType.CreateAuditKey, name: 'Created by AuditKey Reference', value: true },
    { key: eDeltaType.UpdateAuditKey, name: 'Updated by AuditKey Reference', value: true }
  ];

  public allAuditColumns = true;

  eDatalinkTypeItems = eDatalinkTypeItems;

  public savingDatalink = false;

  mainForm: FormGroup;

  formErrors = {
    'name': '',
    'targetConnectionKey': '',
    'auditConnectionKey': '',
    'datalinkType': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.',
    },
    'targetConnectionKey': {
    },
    'auditConnectionKey': {
    },
    'datalinkType': {
      'required': 'Datalink Type is required.',
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
        let params = result[1];
        this.hubCache = result[2];

        this.managedTargetConnections = this.hubCache.hub.dexihConnections
          .filter(c => c.purpose === eConnectionPurpose.Managed || c.purpose === eConnectionPurpose.Target)

        this.managedConnections = this.hubCache.hub.dexihConnections
          .filter(c => c.purpose === eConnectionPurpose.Managed)

        let tableKeys: string = params['sourceTableKeys'];
        this.tableKeys = tableKeys.split('|').map(c => +c);

        if (this.hubCache.status = eCacheStatus.Loaded) {
          this.updateTables();

          this.targetConnectionKey = +params['targetConnectionKey'];

          if (!this.targetConnectionKey) {
            let targetConnection = this.hubCache.hub.dexihConnections.find(c => c.purpose === eConnectionPurpose.Managed);
            if (targetConnection) {
              this.targetConnectionKey = targetConnection.key;
            }
          }
          this.auditConnectionKey = this.targetConnectionKey;
          this.datalinkType = eDatalinkType.General;

          this.buildForm();

          this.watchChanges();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Datalink New');
    }


  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
  }

  updateTables() {

    this.sourceTableKeys = new Array<number>();
    this.sourceTables = new Array<DexihTable>();

    if (this.tableKeys && this.hubCache.hub.dexihConnections) {
      this.hubCache.hub.dexihTables.forEach(table => {
        if (this.tableKeys.findIndex(t => t === table.key) >= 0) {
          this.sourceTableKeys.push(table.key);
          this.sourceTables.push(table);
        }
      });
    }
  }

  buildForm(): void {
    this.mainForm = this.fb.group({
      'name': [this.name, [
      ]],
      'targetConnectionKey': [this.targetConnectionKey > 0 ? this.targetConnectionKey : null, [
        // Validators.required,
      ]],
      'auditConnectionKey': [this.auditConnectionKey > 0 ? this.auditConnectionKey : null, [
        // Validators.required,
      ]],
      'datalinkType': [this.datalinkType, [
        Validators.required,
      ]],
    });

    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged(); // (re)set validation messages now


    this.hasChanged = false;
  }

  onValueChanged() {
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

  selectAllAuditColumns() {
    this.allAuditColumns = !this.allAuditColumns;
    this.auditColumnTypes.forEach(c => c.value = this.allAuditColumns);
  }

  saveDatalink() {
    if (this.mainForm.valid) {

      let value = this.mainForm.value;
      this.savingDatalink = true;
      let auditColumns = this.auditColumnTypes.filter(c => c.value).map(c => c.key);
      this.hubService.createDatalinks(
        this.sourceTableKeys,
        value.name,
        value.datalinkType,
        value.targetConnectionKey,
        null,
        null,
        value.auditConnectionKey,
        this.addSourceColumns,
        auditColumns).then(result => {
          this.savingDatalink = false;
          if (result.length === 1) {
            this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'datalinks', 'datalink-edit', 'edit', result[0].key],
              { relativeTo: this.route.root });
          } else {
            this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'datalinks'], { relativeTo: this.route.root });
          }
        }).catch(() => {
          this.savingDatalink = false;
        });
    } else {
      this.showAllErrors = true;
      this.onValueChanged();
    }
  }

  cancel() {
    this.location.back();
  }

  watchChanges() {
    // watch the current connection in case it is changed in another session.
    this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
        if (hubCacheChange.changeClass === eSharedObjectType.Table) {
            this.updateTables();
        }
    });
}
}
