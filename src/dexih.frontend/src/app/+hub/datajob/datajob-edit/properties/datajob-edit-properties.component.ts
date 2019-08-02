import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DexihDatalinkStep, DexihDatalinkDependency, DexihTrigger, HubCache,
  eFailAction,
  DexihDatalinkStepColumn,
  DexihConnection} from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { HubFormsService } from '../../../hub.forms.service';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';

@Component({

  selector: 'dexih-datajob-edit-form',
  templateUrl: './datajob-edit-properties.component.html'
})
export class DatajobEditPropertiesComponent implements OnInit, OnDestroy {
  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;

  hasChangedObserve: Observable<boolean>;

  public managedConnections: DexihConnection[];

  hasChanged = false;
  showAllErrors = false;

  failActions = [
    { key: eFailAction.Continue, name: 'Continue Execution' },
    { key: eFailAction.ContinueNonDependent, name: 'Continue execution (non dependent datalinks only)' },
    { key: eFailAction.Abend, name: 'Abend' },
  ];

  public datajobChanged = false;
  public mainForm: FormGroup;

  triggerColumns = [
    { name: 'details', title: 'Details', format: 'Html' },
    { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    { name: 'errors', title: 'Errors', format: '' },
  ];

  private _triggerTableData = new BehaviorSubject<Array<any>>(null);
  triggerTableData: Observable<Array<any>> = this._triggerTableData.asObservable();

  stepColumns = [
    { name: 'name', title: 'Name', format: '' },
    { name: 'datalink', title: 'Datalink', format: '' },
    { name: 'dependencies', title: 'Dependencies', format: 'Html' },
    { name: 'inputs', title: 'Inputs', format: 'Html'},
    { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    { name: 'errors', title: 'Errors', format: '' },
  ];

  private _stepTableData = new BehaviorSubject<Array<any>>(null);
  stepTableData: Observable<Array<any>> = this._stepTableData.asObservable();

  constructor(private hubService: HubService,
    private formService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
        this.formService.getCurrentFormObservable(),
      ).subscribe(result => {
        this.hubCache = result[2];
        this.mainForm = result[3];

        if (!this.hubCache.isLoaded()) { return; }

        this.managedConnections = this.hubCache.getManagedConnections();
        this.updateTriggers();
        this.updateSteps();

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Data Job Edit Properties');
    }

  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  updateTriggers() {
    let triggerData = [];
    if (this.mainForm) {
      let triggers = (<FormArray>this.mainForm.controls['dexihTriggers']);
      triggers.controls.forEach(triggerControl => {
        let trigger = triggerControl.value;
        triggerData.push({
          key: trigger.key,
          details: this.hubCache.getTriggerDetails(trigger),
          updateDate: trigger.updateDate,
          errors: triggerControl.valid ? 'No errors' : 'Errors'
        });
      });
    }

    this._triggerTableData.next(triggerData);
  }

  updateSteps() {
    let stepData = [];
    if (this.mainForm) {
      let steps = (<FormArray>this.mainForm.controls['dexihDatalinkSteps']);
      steps.controls.forEach(stepControl => {
        let step = <DexihDatalinkStep> stepControl.value;
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
        stepData.push({
          key: step.key,
          name: step.name,
          datalink: datalink ? datalink.name : 'Not specified',
          dependencies: this.getDependencies(step.dexihDatalinkDependencies),
          inputs: this.getInputs(step.dexihDatalinkStepColumns),
          updateDate: step.updateDate,
          errors: stepControl.valid ? 'No errors' : 'Errors'
        });
      });
    }

    this._stepTableData.next(stepData);
  }

  getDependencies(dependencies: Array<DexihDatalinkDependency>) {
    let depString = '';

    if (dependencies) {
      dependencies.forEach(dep => {
        let step = this.mainForm.value.dexihDatalinkSteps.find(c => c.key === dep.dependentDatalinkStepKey);
        if (step) {
          depString = depString + step.name + '<br>';
        } else {
          depString = depString + 'Error: step not found.<br>';
        }
      });
    }
    return depString;

  }

  getInputs(columns: Array<DexihDatalinkStepColumn>) {
    let depString = '';

    if (columns) {
      columns.forEach(column => {
        depString = depString + column.name + ' = ' + column.defaultValue + '<br>';
      });
    }
    return depString;

  }

  newTrigger() {
    this.router.navigate(['trigger'], { relativeTo: this.route.parent });
  }

  addDatalinkSteps() {
    this.router.navigate(['add-steps'], { relativeTo: this.route.parent });
  }

  editTrigger(trigger: DexihTrigger) {
    this.router.navigate(['trigger', trigger.key], { relativeTo: this.route.parent });
  }

  deleteTriggers(triggers: Array<DexihTrigger>) {
    let triggersArray = <FormArray>this.mainForm.controls.dexihTriggers;

    triggers.forEach(trigger => {
      let index = triggersArray.controls.findIndex(c => c.value.key === trigger.key);
      triggersArray.removeAt(index);
    });
    this.updateTriggers();
  }

  newDatalinkStep() {
    this.router.navigate(['step'], { relativeTo: this.route.parent });
  }

  editDatalinkStep(step: DexihDatalinkStep) {
    this.router.navigate(['step', step.key], { relativeTo: this.route.parent });
  }

  deleteDatalinkSteps(steps: Array<DexihDatalinkStep>) {
    let stepsArray = <FormArray>this.mainForm.controls.dexihDatalinkSteps;

    steps.forEach(step => {
      let index = stepsArray.controls.findIndex(c => c.value.key === step.key);
      stepsArray.removeAt(index);
    });
    this.updateSteps();
  }



}
