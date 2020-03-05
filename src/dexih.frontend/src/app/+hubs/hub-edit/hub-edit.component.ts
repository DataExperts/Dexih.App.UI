import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../+auth/auth.service';
import { DexihHubAuth } from '../../+auth/auth.models';
import { Location } from '@angular/common';
import { DexihMessageComponent } from '../../shared/ui/dexihMessage';
import { eSharedAccessItems, DexihRemoteAgent } from '../../shared/shared.models';

@Component({

  selector: 'dexih-hub-edit-form',
  templateUrl: './hub-edit.component.html'
})
export class HubEditComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

  private _subscription: Subscription;
  private _valueChangesSubscription: Subscription;

  action: string;
  pageTitle: string;

  hub: DexihHubAuth;

  SharedAccessItems = eSharedAccessItems.filter(c => c.key > 0);

  generatingKey = false;
  savingHub = false;
  hasChanged = false;
  showAllErrors = false;

  mainForm: FormGroup;

  formErrors = {
    'name': '',
    'encryptionKey': '',
    'sharedAccess': '',
    'expiryDate': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.',
      'duplicateHubName': 'Name cannot be the same as an existing hub name.'
    },
    'encryptionKey': {
      'required': 'Encryption Key is required.',
      'minlength': 'Encryption Key must be at least 10 characters long.',
      'maxlength': 'Encryption Key cannot be more than 250 characters long.'
    },
    'sharedAccess': {
      'required': 'Specify the type of required access.'
    },
    'expiryDate': {
      'validateDate': 'The expiry date is invalid.'
    }
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.authService.getHubsObservable(),
        this.authService.getRemoteAgentsObservable(),
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        let hubs = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (this.action === 'New') {
          this.hub = new DexihHubAuth();
          this.buildForm();
        } else {
          if (hubs) {
            let hubKey = + params['hubKey'];
            this.hub = hubs.find(c => c.hubKey === hubKey);
            this.buildForm();
          }
        }

      });
    } catch (e) {
      this.dexihMessage.addErrorMessage(e.message);
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
  }

  generateKey() {
    this.generatingKey = true;
    this.authService.getRandomEncryptionKey().then(result => {
      this.mainForm.controls['encryptionKey'].setValue(result);
      this.mainForm.markAsDirty();
      this.generatingKey = false;
    }).catch(reason => {
      this.dexihMessage.addMessage(reason);
      this.generatingKey = false;
    });
  }

  saveHub() {
    if (this.mainForm.valid && this.hasChanged) {

      if (this.hub.hubKey > 0 && this.hub.encryptionKey !== this.mainForm.value.encryptionKey) {
        this.authService.confirmDialog(
          'Warning: Encryption Key Changed',
          // tslint:disable-next-line:max-line-length
          'The encryption key has changed.  This will require all connection password & connection strings in the hub to be updated.  Would you like to continue?'
        ).then(confirm => {
          if (confirm) {
            this.doSaveHub();
          }
        });
      } else {
        this.doSaveHub();
      }
    } else {
      this.showAllErrors = true;
      this.onValueChanged();
    }
  }

  private doSaveHub() {
    this.dexihMessage.reset();
    this.savingHub = true;
    Object.assign(this.hub, this.mainForm.value);
    this.authService.saveHub(this.hub)
      .then(result => {
        this.savingHub = false;
        this.cancel();

        this.router.navigate(['/hub', result.hubKey, 'summary', 'agents']);
        return;

      }).catch(reason => {
        this.dexihMessage.addMessage(reason);
        this.savingHub = false;
      });
  }

  cancel() {
    this.authService.navigateUp();
  }

  buildForm(): void {
    this.mainForm = this.fb.group({
      'name': [this.hub.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        this.duplicateHubNameValidator()
      ]
      ],
      'description': [this.hub.description, [] ],
      'encryptionKey': [this.hub.encryptionKey, [
      ]],
      'sharedAccess': [this.hub.sharedAccess, [
        Validators.required,
      ]],
      'expiryDate': [this.hub.expiryDate, []],
    });

    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now

    this.hasChanged = false;
  }

  duplicateHubNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const name = control.value;
      const no = this.authService.hubNameExists(this.hub.hubKey, name);
      return no ? { 'duplicateHubName': { name } } : null;
    };
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
}
