import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { HubCache, DexihDatalinkColumn, eMappingStatus,
    MappingStatusInfo, impactMappingStatuses, lineageMappingStatuses } from '../../../hub.models';
import { eObjectType, eObjectUse, ColumnUsageNode, InputOutputColumns } from '../../../hub.lineage.models';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'input-column',
    templateUrl: './input-column.component.html'
})
export class InputColumnComponent implements OnInit, OnDestroy {
    @Input() public column: DexihDatalinkColumn = null;
    @Input() public datalinkTransformForm: FormGroup;

    private _subscription: Subscription;

    private hubCache: HubCache;
    private datalinkForm: FormGroup;

    eMappingStatus = eMappingStatus;

    mappingStatusInfoImpact: MappingStatusInfo;
    mappingStatusInfoLineage: MappingStatusInfo;

    childColumns: DexihDatalinkColumn[];

    constructor(
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                this.datalinkForm = result[1];

                let datalinkTransform = this.datalinkTransformForm.value;

                let columnUsage: ColumnUsageNode = new ColumnUsageNode(
                    eObjectType.Transform,
                    eObjectUse.Target,
                    this.datalinkForm.value,
                    this.column,
                    null,
                    datalinkTransform,
                    null,
                    eMappingStatus.NotMapped,
                    this.hubCache
                );

                let mappingStatusImpact = columnUsage.createDatalinkImpact(false);
                this.mappingStatusInfoImpact = impactMappingStatuses.find(c => c.key === mappingStatusImpact);

                let mappingStatusLineage = columnUsage.createDatalinkLineage(true);
                this.mappingStatusInfoLineage = lineageMappingStatuses.find(c => c.key === mappingStatusLineage);

                let io = new InputOutputColumns();
                if (io.findColumn(this.column,
                    datalinkTransform.nodeDatalinkColumn ? datalinkTransform.nodeDatalinkColumn.key : null)) {
                    this.childColumns = this.column.childColumns;
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Input Column');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }


}
