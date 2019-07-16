import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    DexihDatalinkTestStep, HubCache, DexihDatalinkTable, DexihDatalinkTestTable} from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../+auth/auth.service';
import { HubFormsService } from '../../../hub.forms.service';

@Component({
    selector: 'datalinkTest-edit-step',
    templateUrl: './datalinkTest-edit-step.component.html'
})
export class DatalinkTestEditStepComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _formChanges: Subscription;

    private hubCache: HubCache;

    private datalinkTestStepKey: number;
    datalinkTestKey: number;

    datalinkTestForm: FormGroup;

    targetTableName: string;
    inputTableNames: string[];

    stepFormService: HubFormsService;
    showAllErrors = false;

    stepColumns = [
        { name: 'name', title: 'Name', format: '' },
        { name: 'datalink', title: 'Datalink', format: '' },
        { name: 'dependencies', title: 'Dependencies', format: '' },
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    ];

    private _stepTableData = new BehaviorSubject<Array<any>>(null);
    stepTableData: Observable<Array<any>> = this._stepTableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private formService: HubFormsService,
        private route: ActivatedRoute,
        private fb: FormBuilder) {

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

                this.datalinkTestStepKey = +params['datalinkTestStepKey'];

                if (mainForm) {
                    this.datalinkTestForm = mainForm;
                    let step: DexihDatalinkTestStep;

                    if (this.datalinkTestStepKey) {
                        step = mainForm.value.dexihDatalinkTestSteps
                            .find(c => c.key === this.datalinkTestStepKey);

                        if (!step) {
                            this.authService.navigateUp();
                        }
                    } else {
                        step = new DexihDatalinkTestStep();
                        // if new trigger, then set a temporary key of -1 or lower.
                        let minKey = -1;
                        this.datalinkTestForm.value.dexihDatalinkTestSteps.forEach(t => {
                            if (t.key <= minKey) {
                                minKey = t.key - 1;
                            }
                        });
                        step.key = minKey;
                        this.datalinkTestStepKey = minKey;
                        step.isValid = true;
                    }

                    this.updateTableNames(step);

                    const stepForm = this.stepFormService.datalinkTestStep(step);
                    this._formChanges = stepForm.controls.datalinkKey.valueChanges.subscribe(datalinkKey => {
                        this.updateTableNames(stepForm.value);
                    });

                    this.stepFormService.startForm(stepForm);
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit Step');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    private updateTableNames(step: DexihDatalinkTestStep) {
        this.inputTableNames = step.dexihDatalinkTestTables.map(tt => {
            let table = this.hubCache.getTable(tt.tableKey);
            if (table) {
                return table.name;
            } else {
                return 'Table not found.';
            }
        });

        this.targetTableName = 'No target defined.';
        if (step.datalinkKey) {
            let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key ===  step.datalinkKey);
            if (datalink && datalink.dexihDatalinkTargets.length > 0) {
                this.targetTableName = datalink.dexihDatalinkTargets.map(c => this.hubCache.getTable(c.tableKey).name).join(', ');
            }
        }
    }

    cancel() {
        this.authService.navigateUp();
    }

    applyExit() {
        const stepForm = this.stepFormService.currentForm;
        const stepsArray = <FormArray>this.datalinkTestForm.controls.dexihDatalinkTestSteps;

        const index = stepsArray.controls
            .findIndex(c => c.value.key === this.datalinkTestStepKey && c.value.isValid);

        if (index < 0) {
            stepsArray.push(stepForm);
        } else {
            stepsArray.removeAt(index);
            stepsArray.push(stepForm);
        }

        this.authService.navigateUp();
    }
}
