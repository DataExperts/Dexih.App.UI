import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest, Subject, BehaviorSubject, Observable} from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { HubCache, eMappingStatus, updateStrategies, loadStrategies, ConnectionTables } from '../../../hub.models';
import { eDeltaType, eUpdateStrategy, eTransformWriterMethod,
    DexihConnection, DexihDatalinkTarget, DexihDatalinkColumn, eSecurityFlag, eTypeCode } from '../../../../shared/shared.models';
import { InputOutputColumns } from '../../../hub.lineage.models';

@Component({

    selector: 'dexih-datalink-edit-target-form',
    templateUrl: './datalink-edit-target.component.html'
})
export class DatalinkEditTargetComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;
    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    private _subscription: Subscription;
    private _loadStrategySubscription: Subscription;

    public eMappingStatus = eMappingStatus;
    public eDeltaType = eDeltaType;

    public tableFormService: HubFormsService;

    public eUpdateStrategy = eUpdateStrategy;
    public updateStrategies = updateStrategies;

    public eTransformWriterMethod = eTransformWriterMethod;
    public loadStrategies = loadStrategies;

    public managedConnections: DexihConnection[];
    public connectionTables: ConnectionTables[];

    public showTableProperties = false;

    public targets: DexihDatalinkTarget[] = [];

    public logger = new LogFactory('datalink-edit-target-table');

    public showBulkEdit = false;

    public targetTableColumns = [
        { name: 'table.name', title: 'Name', format: '' },
        { name: 'table.logicalName', title: 'Logical', format: '' },
        { name: 'nodeDatalinkColumn.logicalName', title: 'Node', format: ''}
    ];

    columns = [
        { name: 'name', title: 'Name', format: '' },
        { name: 'logicalName', title: 'Logical', format: '' },
        { name: 'dataType', title: 'Data Type', format: 'Enum', enum: eTypeCode },
        { name: 'deltaType', title: 'Delta Type', format: 'Enum', enum: eDeltaType },
        { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
        { name: 'defaultValue', title: 'Default Value', format: '' },
        { name: 'securityFlag', title: 'Security Flag', format: 'Enum', enum: eSecurityFlag },
        { name: 'format', title: 'Format'},
        { name: 'columnValidation', title: 'Validation', format: '', class: 'columnValidationClass', tooltip: 'columnValidationTooltip' }
    ];

    private _columnsObservable = new BehaviorSubject<Array<any>>(null);
    columnsObservable: Observable<Array<any>> = this._columnsObservable.asObservable();

    constructor(
        private hubService: HubService,
        authService: AuthService,
        public editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router,
        fb: FormBuilder) {

        this.tableFormService = new HubFormsService(fb, hubService, authService);
    }

    ngOnInit() {
        this.logger.LogC(() => `ngOnInit`, eLogLevel.Trace);

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                let data = result[0];
                this.hubCache = result[2];
                this.datalinkForm = result[3];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.managedConnections = this.hubCache.getManagedConnections();
                    this.logger.LogC(() => `ngOnInit - completed`, eLogLevel.Trace);
                }

                this.updateTargets();
                this.updateColumns();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Target Table');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._loadStrategySubscription) { this._loadStrategySubscription.unsubscribe(); }
    }

    private updateTargets() {
        this.targets = this.datalinkForm.controls.dexihDatalinkTargets.value.sort((a, b) => a.position - b.position);
    }

    updateColumns() {
        let io = new InputOutputColumns();
        let datalinkColumns = io.getDatalinkOutputColumns(this.datalinkForm.value);

        this._columnsObservable.next(datalinkColumns);
    }

    applyBulkEdit() {
        this.datalinkForm.markAsDirty();
        this.updateColumns();
    }

    editColumn(column) {
        this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
    }

    editTable(target: DexihDatalinkTarget) {
        this.router.navigate(['table-edit', target.key], { relativeTo: this.route });
    }

    addTable() {
        this.router.navigate(['table-new'], { relativeTo: this.route });
    }

    deleteTables(targets: DexihDatalinkTarget[]) {
        targets.forEach(target => {
            this.editDatalinkService.deleteDatalinkTarget(this.datalinkForm, target.key);
            this.updateTargets();
        });
    }

    targetSortChange(targets: DexihDatalinkTarget[]) {
        let position = 1;
        targets.forEach(target => {
            target.position = position++;
        });
        this.updateTargets();
    }

}
