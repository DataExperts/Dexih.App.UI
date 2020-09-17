import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable ,  Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from '../../../../+auth/auth.service';
import { HubFormsService } from '../../../hub.forms.service';
import { HubService } from '../../../hub.service';
import { DexihTrigger } from '../../../../shared/shared.models';

@Component({
  selector: 'datajob-edit-trigger',
  templateUrl: './datajob-edit-trigger.component.html'
})
export class DatajobEditTriggerComponent implements OnInit, OnDestroy {
  public pageTitle: string;
  public action: string;

  private _subscription: Subscription;

  triggerFormService: HubFormsService;
  triggerKey: number;
  datajobKey: number;

  originalTrigger: DexihTrigger;

  mainForm: FormGroup;

  constructor(
    private authService: AuthService,
    private hubService: HubService,
    private formService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder) {

    // create a seperate formService instance to manage the copied form
    this.triggerFormService = new HubFormsService(fb, hubService, authService);
  }


  ngOnInit() {
    try {
      this._subscription = combineLatest([
        this.route.data,
        this.route.params,
        this.formService.getCurrentFormObservable()]
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        this.mainForm = result[2];

        if (!this.mainForm) { return; }

        this.pageTitle = data['pageTitle'];
        this.action = data['action'];

        this.triggerKey = +params['triggerKey'];

        let triggerForm: FormGroup;

        if (this.triggerKey) {
          this.originalTrigger = this.mainForm.value.dexihTriggers.find(c => c.key === this.triggerKey);
          if (!this.originalTrigger) {
            this.authService.navigateUp();
            return;
          }
          triggerForm = this.triggerFormService.triggerFormGroup(this.originalTrigger);
        } else {
          let trigger = new DexihTrigger();
          // if new trigger, then set a temporary key of -1 or lower.
          let minKey = -1;
          this.mainForm.value.dexihTriggers.forEach(t => {
            if (t.key <= minKey) {
              minKey = t.key - 1;
            }
          });
          trigger.key = minKey;
          triggerForm = this.triggerFormService.triggerFormGroup(trigger);
        }
        this.triggerFormService.startForm(triggerForm);
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Datajob Edit Trigger');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  cancel() {
    this.authService.navigateUp();
  }

  applyExit() {
    const triggerForm = this.triggerFormService.currentForm;
    const triggersArray = <FormArray>this.mainForm.controls.dexihTriggers;

    if (!this.originalTrigger) {
      triggersArray.push(triggerForm);
    } else {
      const originalTrigger = triggersArray.controls.find(c => c.value.key === triggerForm.value.key);
      originalTrigger.setValue(triggerForm.value);
    }

    this.authService.navigateUp();
  }
}

