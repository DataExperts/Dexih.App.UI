import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../+auth/auth.service';
import { HubFormsService } from '../../../hub.forms.service';
import { HubCache, DexihInputParameter } from '../../../hub.models';
import { InputColumn, DexihDatalinkStep, DexihDatalinkStepColumn, DexihDatalinkDependency, InputParameterBase } from '../../../../shared/shared.models';

@Component({
    selector: 'datajob-edit-step',
    templateUrl: './datajob-edit-step.component.html'
})
export class DatajobEditStepComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _datalinkSubscription: Subscription;

    private hubCache: HubCache;

    private datalinkStepKey: number;
    datajobKey: number;

    datajobForm: FormGroup;

    stepFormService: HubFormsService;
    showAllErrors = false;

    public inputColumns: InputColumn[];

    stepColumns = [
        { name: 'name', title: 'Name', format: '' },
        { name: 'datalink', title: 'Datalink', format: '' },
        { name: 'dependencies', title: 'Dependencies', format: '' },
        { name: 'updateDate', title: 'Last Updated', format: 'DateTime' },
    ];

    private _stepTableData = new BehaviorSubject<Array<any>>(null);
    stepTableData: Observable<Array<any>> = this._stepTableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private formService: HubFormsService,
        private route: ActivatedRoute,
        fb: FormBuilder) {
        // create a separate formService instance to manage the copied form
        this.stepFormService = new HubFormsService(fb, hubService, authService);
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.formService.getCurrentFormObservable(),
            ).subscribe(result => {
                let params = result[1];
                this.hubCache = result[2];
                let mainForm = result[3];

                this.datalinkStepKey = +params['datalinkStepKey'];

                if (mainForm) {
                    this.datajobForm = mainForm;
                    let step: DexihDatalinkStep;

                    if (this.datalinkStepKey) {
                        step = mainForm.value.dexihDatalinkSteps
                            .find(c => c.key === this.datalinkStepKey);

                        if (!step) {
                            this.authService.navigateUp();
                            return;
                        }
                    } else {
                        step = new DexihDatalinkStep();
                        // if new step, then set a temporary key of -1 or lower.
                        let minKey = -1;
                        this.datajobForm.value.dexihDatalinkSteps.forEach(t => {
                            if (t.key <= minKey) {
                                minKey = t.key - 1;
                            }
                        });
                        step.key = minKey;
                        this.datalinkStepKey = minKey;
                    }

                    const stepForm = this.stepFormService.datalinkStepFormGroup(mainForm, step);
                    this.stepFormService.startForm(stepForm);
                    this.updateSteps();

                    this._datalinkSubscription = stepForm.controls.datalinkKey.valueChanges.subscribe(datalinkKey => {
                        this.updateDatalinkStepColumns(datalinkKey);
                    });
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datajob Edit Step');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._datalinkSubscription) { this._datalinkSubscription.unsubscribe(); }
    }

    updateSteps() {
        let stepData = [];
        if (this.datajobForm.value.dexihDatalinkSteps) {
            this.datajobForm.value.dexihDatalinkSteps.forEach(step => {
                if (step.key !== this.stepFormService.currentForm.value.key) {
                    let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                    stepData.push({
                        key: step.key,
                        name: step.name,
                        datalink: datalink ? datalink.name : 'Not specified',
                        dependencies: '',
                        updateDate: step.updateDate
                    });
                }
            });
        }

        this._stepTableData.next(stepData);
    }

    updateDatalinkStepColumns(datalinkKey: number) {

        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
        let stepForm = <FormGroup>this.stepFormService.currentForm;
        let stepParameters = <FormArray>stepForm.controls.parameters;

        let currentParameters = <DexihInputParameter[]> stepParameters.value;
        stepParameters.clear();

        datalink.parameters.forEach(parameter => {
            let currentParameter = currentParameters.find( c => c.name === parameter.name);
            let newParameter = new InputParameterBase();
            if (currentParameter) {
                newParameter.name = currentParameter.name;
                newParameter.value = currentParameter.value;
            } else {
                newParameter.name = parameter.name;
                newParameter.value = parameter.value;
            }
            let newFormParameter = this.formService.parameter(newParameter);
            stepParameters.push(newFormParameter);
        });



        let stepColumnsForm = <FormArray>stepForm.controls.dexihDatalinkStepColumns;
        let stepColumns = <DexihDatalinkStepColumn[]> stepColumnsForm.value;

        while (stepColumnsForm.length !== 0) {
            stepColumnsForm.removeAt(0)
        }

        let inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput);

        inputColumns.forEach(col => {
            let stepColumn = stepColumns.find(c => c.name === col.name);
            if (!stepColumn) {
                stepColumn = new DexihDatalinkStepColumn();
                stepColumn.defaultValue = col.defaultValue;
            }
            stepColumn.dataType = col.dataType;
            stepColumn.name = col.name;
            stepColumn.logicalName = col.logicalName;
            stepColumn.columnGroup = col.columnGroup;
            stepColumn.rank = col.rank;
            stepColumn.maxLength = col.maxLength;
            stepColumn.deltaType = col.deltaType;
            stepColumn.allowDbNull = col.allowDbNull;
            stepColumn.isUnicode = col.isUnicode;
            stepColumn.isValid = true;

            let stepColumnForm = this.formService.datalinkStepColumnFormGroup(stepColumn);
            stepColumnsForm.push(stepColumnForm);
        });

        if (!stepForm.controls.name.value) {
            stepForm.controls.name.setValue(datalink.name);
        }
    }

    dependentStepsChange(items) {
        let datalinkDependencies = <FormArray>this.stepFormService.currentForm.controls.dexihDatalinkDependencies;
        let minKey = -1;
        if (datalinkDependencies) {
            datalinkDependencies.controls.forEach(dep => {
                if (dep.valid['key'] <= minKey) {
                    minKey = dep['key'] - 1;
                }
            });
        }

        while (datalinkDependencies.length > 0) {
            datalinkDependencies.removeAt(0);
        }

        items.forEach(newDep => {
            let oldDep = datalinkDependencies ?
                datalinkDependencies.controls.find(c => c.value.datalinkStepKey === newDep.datalinkStepKey)
                : null;
            if (oldDep) {
                datalinkDependencies.push(oldDep);
            } else {
                let dep = new DexihDatalinkDependency();
                dep.key = minKey;
                dep.datalinkStepKey = this.datalinkStepKey;
                dep.dependentDatalinkStepKey = newDep.key;
                datalinkDependencies.push(this.stepFormService.datalinkDependencyFormGroup(dep));
                minKey--;
            }
        });

        this.stepFormService.hasChanged = true;
    }

    cancel() {
        this.authService.navigateUp();
    }

    applyExit() {
        const stepForm = this.stepFormService.currentForm;
        const stepsArray = <FormArray>this.datajobForm.controls.dexihDatalinkSteps;

        const index = stepsArray.controls
            .findIndex(c => c.value.key === stepForm.value.key && c.value.isValid);

        if (index < 0) {
            stepsArray.push(stepForm);
        } else {
            stepsArray.removeAt(index);
            stepsArray.insert(index, stepForm);
        }

        this.authService.navigateUp();
    }
}
