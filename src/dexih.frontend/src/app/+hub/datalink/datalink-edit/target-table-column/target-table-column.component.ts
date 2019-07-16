import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HubFormsService } from '../../../hub.forms.service';
import { AuthService } from '../../../../+auth/auth.service';
import { eDeltaType } from '../../../hub.models'
import { Subscription, combineLatest} from 'rxjs';

@Component({
    selector: 'target-table-column',
    templateUrl: './target-table-column.component.html'
})

export class TargetTableColumnComponent implements OnInit, OnDestroy {
    private _currentFormSubscription: Subscription;

    public targetKey: number;
    public columnKey: number;
    public deltaType: eDeltaType;
    public tableForm: FormGroup;

    constructor(
        private authService: AuthService,
        private formsService: HubFormsService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this._currentFormSubscription = this.route.params.subscribe(params => {
            this.targetKey = + params['targetKey'];
            this.columnKey = + params['columnKey'];
            this.deltaType = params['deltaType'];

            this.formsService.getCurrentFormObservable().subscribe(datalinkForm => {
                if (datalinkForm) {
                    let targets = <FormArray> datalinkForm.controls.dexihDatalinkTargets;

                    let targetForm = <FormGroup> targets.controls.find(c => c.value.key === this.targetKey);
                    this.tableForm = <FormGroup>targetForm.controls.table;
                }
            });
        });
    }

    ngOnDestroy() {
        if (this._currentFormSubscription) { this._currentFormSubscription.unsubscribe(); }
    }

    columnUpdated() {
        this.authService.navigateUp();
    }
}
