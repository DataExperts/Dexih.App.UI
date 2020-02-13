import { Component, Input, Output, OnInit, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { HubCache, eMappingStatus, MappingStatusInfo, lineageMappingStatuses } from '../../../hub.models';
import { eObjectUse, ColumnUsageNode, eDatalinkObjectType } from '../../../hub.lineage.models';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { DexihTableColumn, DexihTable, DexihDatalinkColumn, eTypeCode } from '../../../../shared/shared.models';


@Component({

    selector: 'target-column',
    templateUrl: './target-column.component.html'
})
export class TargetColumnComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public column: DexihTableColumn = null;
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public inputTables: Array<DexihTable> = null;
    @Output() public inputOutputDrop: EventEmitter<{inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn}>
            = new EventEmitter<{inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn}>();

    private _subscription: Subscription;

    private hubCache: HubCache;
    private datalinkForm: FormGroup;

    eMappingStatus = eMappingStatus;

    eTypeCode = eTypeCode;

    public mappingStatusInfoLineage: MappingStatusInfo;
    public mappingStatusInfoImpact: MappingStatusInfo;

    public mappingStatusLineage: eMappingStatus;

    childColumns: DexihTableColumn[];

    public logger = new LogFactory('output-column.component');
    public logCount = 0;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
              this.hubCache = result[0];
              this.datalinkForm = result[1];

              this.logger.LogC(() => `Subscription count: ${this.logCount++}`, eLogLevel.Trace);


            this.childColumns = this.column.childColumns;

              this.refreshStatus();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Output Column');
        }
    }

    ngOnChanges() {
        this.refreshStatus();
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    refreshStatus() {
        if (this.datalinkForm) {
            let columnUsage: ColumnUsageNode = new ColumnUsageNode(
            eDatalinkObjectType.TargetTable, eObjectUse.Target,
            this.datalinkForm.value, null, this.column, null, null, eMappingStatus.NotMapped, this.hubCache);
            this.mappingStatusLineage = columnUsage.createDatalinkLineage(true);
            this.mappingStatusInfoLineage = lineageMappingStatuses.find(c => c.key === this.mappingStatusLineage);
        }
    }


  editColumn() {
      if (this.column.key && (this.mappingStatusLineage === eMappingStatus.Mapped
        || this.mappingStatusLineage === eMappingStatus.MappedToNothing)) {
        this.router.navigate(['column', this.column.key], { relativeTo: this.route.parent });
      } else {
          this.authService.informationDialog('Can not edit column',
          // tslint:disable-next-line:max-line-length
          'This column is not created by the current transform (i.e. a pass-through or target column).  To edit a column first create a mapping.')
      }
    }
}
