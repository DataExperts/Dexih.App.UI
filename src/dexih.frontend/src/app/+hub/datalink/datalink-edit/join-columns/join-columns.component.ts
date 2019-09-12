import { Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DexihDatalinkColumn } from '../../../../shared/shared.models';

@Component({

    selector: 'join-columns',
    templateUrl: './join-columns.component.html'
})
export class JoinColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;

    @Output() public inputJoinDrop: EventEmitter<{ inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn }>
        = new EventEmitter<{ inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn }>();

    private _subscription: Subscription;
    private _changesSubscription: Subscription;


    public joinTable;

    public datalinkForm: FormGroup;

    public joinColumns: Array<DexihDatalinkColumn>;

    constructor(
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
    ) {
    }

    ngOnInit() {
        try {

            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                this.datalinkForm = result[1];

                if (this.datalinkForm) {
                    this.updateTableData();
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }
    }

    ngOnChanges() {
        this.updateTableData();
        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
        this._changesSubscription = this.datalinkTransformForm.controls.joinDatalinkTable.valueChanges.subscribe(() => {
            this.updateTableData();
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    }

    updateTableData() {
        if (this.datalinkTransformForm && this.datalinkTransformForm.controls.joinDatalinkTable.value) {
            this.joinTable = this.datalinkTransformForm.controls.joinDatalinkTable.value;
            if (this.joinTable) {
                this.joinColumns = new Array<DexihDatalinkColumn>();
                this.joinTable.dexihDatalinkColumns.forEach(column => {
                    this.joinColumns.push(column)
                });
            } else {
                this.joinColumns = null;
            }
        } else {
            this.joinColumns = null;
        }
    }

    newInputJoinDrop(inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn) {
        this.inputJoinDrop.emit({inputColumn, joinColumn});
    }
}
