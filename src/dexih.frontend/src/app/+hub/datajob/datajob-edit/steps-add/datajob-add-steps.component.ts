import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { HubFormsService } from '../../../hub.forms.service';
import { FormGroup, FormArray } from '@angular/forms';
import { HubCache } from '../../../hub.models';
import { DexihDatalink, eSharedObjectType, DexihDatalinkStep, eDatalinkType } from '../../../../shared/shared.models';

@Component({
    selector: 'datajob-add-steps',
    templateUrl: './datajob-add-steps.component.html'
})
export class DatajobAddStepsComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    private hubCache: HubCache;

    hasChanged = false;

    columns = [
        { name: 'name', title: 'Name', format: '', tags: 'tags' },
        { name: 'datalinkType', title: 'Datalink Type', enum: eDatalinkType, format: 'Enum' },
        { name: 'sourceTableName', title: 'Source Table', format: '' },
        { name: 'targetTableName', title: 'Target Table', format: '' },
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

  public mainForm: FormGroup;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private formService: HubFormsService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.formService.getCurrentFormObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.mainForm = result[3];

                this.updateDatalinks();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Index');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    changeEvent($event) {
        this.hasChanged = true;
    }

    private updateDatalinks() {
        let newDatalinks: Array<DexihDatalink>;
        if (this.hubCache) {
            if (!this.hubCache.hub.dexihDatalinks) {
                this._tableData.next(new Array<DexihDatalink>());
            } else {
                let datalinks = this.hubCache.hub.dexihDatalinks.map(d => {
                    let sourceTable = this.hubCache.getTable(d.sourceDatalinkTable.sourceTableKey);
                    return {
                        key: d.key,
                        name: d.name,
                        datalinkType: d.datalinkType,
                        sourceTableName: sourceTable ? sourceTable.name : 'No source table',
                        targetTableName:  d.dexihDatalinkTargets.map(target => {
                            let table = this.hubCache.getTable(target.tableKey);
                            if (table) {
                                return table.name;
                            }
                        }).join(', '),
                        updateDate: d.updateDate,
                        tags: this.hubCache.getObjectTags(eSharedObjectType.Datalink, d.key),
                    };
                });

                this._tableData.next(datalinks);
            }
        }

    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Datalink) {
                this.updateDatalinks();
            }
        });
    }

    close() {
        this.authService.navigateUp();
    }

    addSelected(items: Array<DexihDatalink>) {
        let existingDatalinks = new Array<string>();
        let formDexihDatalinkSteps = this.mainForm.value.dexihDatalinkSteps;
        items.forEach(item => {
            let exists = formDexihDatalinkSteps.find(c => c.datalinkKey === item.key);
            if (exists) {
                existingDatalinks.push(item.name);
            }
        });

        if (existingDatalinks.length > 0) {
            let names = existingDatalinks.join(', ');
            this.authService.confirmDialog('Warning duplicate datalinks',
            'The following datalinks already exist as steps within the job.  ' + names +
            '.<br />Are you sure you want these datalinks added to the job').then( confirm => {
                if (confirm) {
                this.addSelectedConfirmed(items);
                }
            }).catch(reason => {});
        } else {
            this.addSelectedConfirmed(items);
        }

    }

    addSelectedConfirmed(items: Array<DexihDatalink>) {
        let formDexihDatalinkSteps = <Array<DexihDatalinkStep>> this.mainForm.value.dexihDatalinkSteps;

        let minKey = -1;
        formDexihDatalinkSteps.forEach(t => {
            if (t.key <= minKey) {
                minKey = t.key - 1;
            }
        });

        let stepsArray = (<FormArray>this.mainForm.controls['dexihDatalinkSteps']);

        items.forEach(datalink => {
            let newDatalinkStep = new DexihDatalinkStep();
            newDatalinkStep.name = datalink.name;
            // ensure the name is unique by appending a count to the end.
            let i = 0;
            while (true) {
                if (!formDexihDatalinkSteps.find(c => c.name === newDatalinkStep.name)) {
                    break;
                }
                newDatalinkStep.name = datalink.name + '_' + i.toString();
                i++;
            }
            newDatalinkStep.key = minKey;
            newDatalinkStep.datalinkKey = datalink.key;
            newDatalinkStep.datajobKey = this.mainForm.value.key;
            newDatalinkStep.isValid = true;

            let stepFormGroup = this.formService.datalinkStepFormGroup(this.mainForm, newDatalinkStep);
            stepsArray.push(stepFormGroup);

            minKey--;
        });

        this.authService.navigateUp();
    }
}
