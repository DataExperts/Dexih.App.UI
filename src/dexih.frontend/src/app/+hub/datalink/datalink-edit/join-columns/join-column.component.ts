import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { HubCache, eMappingStatus, MappingStatusInfo, lineageMappingStatuses, impactMappingStatuses } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { eObjectUse, ColumnUsageNode, eDatalinkObjectType } from '../../../hub.lineage.models';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DexihDatalinkColumn, DexihTable, eTypeCode } from '../../../../shared/shared.models';


@Component({
    selector: 'join-column',
    templateUrl: './join-column.component.html'
})
export class JoinColumnComponent implements OnInit, OnDestroy {

    @Input() public column: DexihDatalinkColumn = null;
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public datalinkForm: FormGroup;
    @Input() public inputTables: Array<DexihTable> = null;
    @Output() public inputJoinDrop: EventEmitter<{inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn}>
            = new EventEmitter<{inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn}>();

    private _hubCacheSubscription: Subscription;

    private hubCache: HubCache;

    eMappingStatus = eMappingStatus;
    eTypeCode = eTypeCode;

    columnLineageStatusIcon: string;
    columnLineageStatusColor: string;

    public mappingStatusInfoImpact: MappingStatusInfo;
    public mappingStatusInfoLineage: MappingStatusInfo;

    constructor(private hubService: HubService) {
    }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            if (hubCache.isLoaded()) {
                this.hubCache = hubCache;

                let columnUsage = new ColumnUsageNode(
                    eDatalinkObjectType.Transform,
                    eObjectUse.Target,
                    this.datalinkForm.value,
                    this.column,
                    null,
                    this.datalinkTransformForm.value,
                    null,
                    eMappingStatus.NotMapped,
                    this.hubCache
                    );
                let lineageMappingStatus = columnUsage.createDatalinkLineage(false);
                this.mappingStatusInfoLineage = lineageMappingStatuses.find(c => c.key === lineageMappingStatus);

                let impactMappingStatus = columnUsage.createDatalinkImpact(false);
                this.mappingStatusInfoImpact = impactMappingStatuses.find(c => c.key === impactMappingStatus);
            }
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

}
