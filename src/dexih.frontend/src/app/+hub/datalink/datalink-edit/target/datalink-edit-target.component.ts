import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { HubCache, eMappingStatus, updateStrategies, loadStrategies, ConnectionTables } from '../../../hub.models';
import { eDeltaType, eUpdateStrategy, eTransformWriterMethod,
    DexihConnection, DexihDatalinkTarget } from '../../../../shared/shared.models';

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

    public targetTableColumns = [
        { name: 'table.name', title: 'Name', format: '' },
        { name: 'table.logicalName', title: 'Logical', format: '' },
        { name: 'nodeDatalinkColumn.logicalName', title: 'Node', format: ''}
    ];

    constructor(
        private hubService: HubService,
        authService: AuthService,
        private editDatalinkService: DatalinkEditService,
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
