import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest, BehaviorSubject, Observable} from 'rxjs';
import { HubFormsService } from '../../../hub.forms.service';
import { FormGroup, FormArray } from '@angular/forms';
import { HubCache } from '../../../hub.models';
import { DexihDatalinkTestStep } from '../../../../shared/shared.models';

@Component({

  selector: 'datalinkTest-properties-form',
  templateUrl: './datalinkTest-properties.component.html'
})
export class DatalinkTestPropertiesComponent implements OnInit, OnDestroy {

  private datalinkTestKey: number;

  public hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;

  public hasChanged = false;
  public mainForm: FormGroup;

  stepColumns = [
    { name: 'name', title: 'Name', format: '' },
    { name: 'datalink', title: 'Datalink', format: '' },
    { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
    { name: 'errors', title: 'Errors', format: '' },
  ];

  private _stepTableData = new BehaviorSubject<Array<any>>(null);
  stepTableData: Observable<Array<any>> = this._stepTableData.asObservable();

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.hubService.getHubCacheObservable(),
        this.formsService.getCurrentFormObservable(),
      ).subscribe(result => {
        this.hubCache = result[0];
        this.mainForm = result[1];

        this.updateSteps();
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Data Job Edit Properties');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  updateSteps() {
    let stepData = [];
    if (this.mainForm) {
      let steps = (<FormArray>this.mainForm.controls['dexihDatalinkTestSteps']);
      steps.controls.forEach(stepControl => {
        let step = <DexihDatalinkTestStep> stepControl.value;
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
        stepData.push({
          key: step.key,
          name: step.name,
          datalink: datalink ? datalink.name : 'Not specified',
          updateDate: step.updateDate,
          errors: stepControl.valid ? 'No errors' : 'Errors'
        });
      });
    }

    this._stepTableData.next(stepData);
  }

  newStep() {
    this.router.navigate(['step'], { relativeTo: this.route.parent });
  }

  editStep(step: DexihDatalinkTestStep) {
    this.router.navigate(['step', step.key], { relativeTo: this.route.parent });
  }


  deleteSteps(steps: Array<DexihDatalinkTestStep>) {
    let stepsArray = <FormArray>this.mainForm.controls.dexihDatalinkTestSteps;

    steps.forEach(step => {
      let index = stepsArray.controls.findIndex(c => c.value.datalinkTestStepKey === step.key);
      stepsArray.removeAt(index);
    });
    this.updateSteps();
  }

  close() {
    this.authService.navigateUp();
  }

}
