import { HostListener, Component, OnInit, OnDestroy, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { HubService } from '../../hub.service';
import { DatalinkEditService } from './datalink-edit.service';
import { Subscription, combineLatest } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../logging';
import { HubCache, eCacheStatus } from '../../hub.models';
import { DexihDatalinkTransform, eTransformWriterMethod, DexihDatalink, eDatalinkType,
    eSourceType, eTransformType, DexihDatalinkTable } from '../../../shared/shared.models';
import { transformTypes } from '../../hub.remote.models';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'dexih-datalink-edit-form',
    templateUrl: './datalink-edit.component.html',
    styleUrls: ['./datalink-edit.component.scss']
})
export class DatalinkEditComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private _subscription: Subscription;
    private _datalinkFormSubscription: Subscription;
    private _transformsChange: Subscription;
    private _sourceChange: Subscription;
    // private _datalinkTransformsSubscription: Subscription;

    private hubCache: HubCache;

    public savingDatalink = false;

    public action: string; // new or edit
    public pageTitle: string;
    public params: Params;

    public logger = new LogFactory('datalink-edit.component');
    public logCount = 0;

    public eSourceType = eSourceType;

    public help: string;

    public datalinkTransforms: {transform: AbstractControl, name: string, icon: string, invalid: boolean}[] = null;

    eTransformWriterMethod = eTransformWriterMethod;

    private isLoaded = false;

    showPage = false;
    showPageMessage = 'Loading datalink...';

    public validationTransform;
    public source: any = {};

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        public editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    getHelp() {
        let route = this.router.routerState.root.snapshot;
        while (route.firstChild) { route = route.firstChild; }
        this.help = route.data['help'];
    }

    ngOnInit() {
        this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

        try {
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.getHelp();
                }
            });

            this.getHelp();

            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.action = result[0]['action'];
                this.pageTitle = result[0]['pageTitle'];
                this.params = result[1];
                this.hubCache = result[2];

                if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded ) { return; }

                this.editDatalinkService.init(this.hubCache);

                if (this.isLoaded && this.action === 'new') { return; }

                if (this.isLoaded && this.editDatalinkService.hubFormsService.hasChanged) {
                    this.authService.confirmDialog('Datalink synchronization warning',
                    'The hub was disconnected, meaning the datalink could have been changed by another session.  Would you like to discard the current changes, and reload the latest version of the datalink?')
                    .then(confirm => {
                        if (confirm) {
                            this.load();
                        }
                    }).catch(() => {
                        return;
                    });
                } else {
                    this.load();
                }
            });

            this.editDatalinkService.ngOnInit();

        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._datalinkFormSubscription) { this._datalinkFormSubscription.unsubscribe(); }
        if (this._transformsChange) { this._transformsChange.unsubscribe(); }
        if (this._sourceChange) { this._sourceChange.unsubscribe(); }
//        if (this._datalinkTransformsSubscription) { this._datalinkTransformsSubscription.unsubscribe(); }

        // shut down service
        this.editDatalinkService.ngOnDestroy();
    }

    private load() {
        this.logger.LogC(() => `Subscription count: ${this.logCount++}`, eLogLevel.Trace);

        if (this.action === 'edit') {

            // get the hub key from the route data, and update the service.
            let datalinkKey: number = +this.params['datalinkKey'];
            if (!datalinkKey) {
                this.logger.LogC(() => `no datalink found.`, eLogLevel.Warning);

                this.hubService.addHubErrorMessage('There was no datalink specified to edit.');
                this.showPageMessage = 'Edit failed...';
                this.editDatalinkService.hubFormsService.datalink(null);
            } else {
                let originalDatalink = this.hubCache.hub.dexihDatalinks.find(d => d.key === datalinkKey);

                if (originalDatalink) {
                    this.editDatalinkService.hubFormsService.datalink(originalDatalink);
                    this.route.snapshot.data['pageTitle'] = 'Datalink (' + originalDatalink.name + ')';

                } else {
                    this.logger.LogC(() => `no datalink found. key: ${datalinkKey}`, eLogLevel.Warning);
                    this.hubService.addHubErrorMessage('A datalink with the key ' +
                        datalinkKey + ' could not be found in the repository.');
                    this.showPageMessage = 'Edit failed...';
                }
            }

        } else if (!this.isLoaded && this.action === 'new') {
            let datalink = new DexihDatalink();
            datalink.sourceDatalinkTable = new DexihDatalinkTable();
            this.editDatalinkService.hubFormsService.datalink(datalink);
            this.logger.LogC(() => `new datalink set.`, eLogLevel.Warning);
        } else if (!this.isLoaded && this.action === 'copy') {
            // get the hub key from the route data, and update the service.
            let datalinkKey: number = +this.params['datalinkKey'];
            if (!datalinkKey) {
                this.logger.LogC(() => `no datalink found.`, eLogLevel.Warning);

                this.hubService.addHubErrorMessage('There was no datalink specified to copy.');
                this.showPageMessage = 'Copy failed...';
                this.editDatalinkService.hubFormsService.datalink(null);
            } else {
                let originalDatalink = this.hubCache.hub.dexihDatalinks.find(d => d.key === datalinkKey);

                if (originalDatalink) {
                    let copyDatalink = this.hubCache.CopyDatalink(originalDatalink);
                    this.editDatalinkService.hubFormsService.datalink(copyDatalink);
                    this.editDatalinkService.hubFormsService.hasChanged = true;
                    this.route.snapshot.data['pageTitle'] = 'Datalink (' + copyDatalink.name + ')';

                } else {
                    this.logger.LogC(() => `no datalink found. key: ${datalinkKey}`, eLogLevel.Warning);
                    this.hubService.addHubErrorMessage('A datalink with the key ' +
                        datalinkKey + ' could not be found in the repository.');
                    this.showPageMessage = 'Copy failed...';
                }
            }
        } else if (this.action === 'sourceTable') {
            let datalink = new DexihDatalink();
            datalink.datalinkType = eDatalinkType.Query;
            datalink.sourceDatalinkTable = new DexihDatalinkTable();
            datalink.sourceDatalinkTable.sourceType = eSourceType.Table;
            datalink.sourceDatalinkTable.sourceTableKey = +this.params['sourceTableKey'];
            this.editDatalinkService.reBuildDatalinkTable(datalink.sourceDatalinkTable);
            datalink.name = 'Datalink query for ' + datalink.sourceDatalinkTable.name;

            this.editDatalinkService.hubFormsService.datalink(datalink);
            this.editDatalinkService.hubFormsService.currentForm.markAsDirty();
            this.editDatalinkService.hubFormsService.hasChanged = true;

            this.logger.LogC(() => `new source table datalink set.`, eLogLevel.Warning);
        }

        this.isLoaded = true;

        

        // monitor for any changes to the datalink
        if (this._datalinkFormSubscription) { this._datalinkFormSubscription.unsubscribe(); }
        this._datalinkFormSubscription =
            this.editDatalinkService.hubFormsService.getCurrentFormObservable().subscribe(datalinkForm => {
                if (!datalinkForm) { return; }
                this.datalinkForm = datalinkForm;

                this.refreshTransforms();

                this.refreshSource(this.datalinkForm.controls.sourceDatalinkTable.value);
                if (this._sourceChange) { this._sourceChange.unsubscribe(); }
                this._sourceChange = this.datalinkForm.controls.sourceDatalinkTable.valueChanges.subscribe(source => {
                    this.refreshSource(source);
                });
                

                if (this._transformsChange) { this._transformsChange.unsubscribe(); }
                this._transformsChange = this.datalinkForm.controls.dexihDatalinkTransforms.valueChanges
                    .subscribe(() => this.refreshTransforms());

                let key = datalinkForm.controls.key.value;
                if (key) {
                    if (history.pushState) {
                        let newUrl = window.location.pathname.replace('/new', `/edit/${key}`)
                        this.router.navigateByUrl(newUrl);
                    }
                }
            });

        this.showPage = true;
        this.showPageMessage = '';
    }

    public canDeactivate(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (this.editDatalinkService.hubFormsService.hasChanged) {
                this.authService.confirmDialog('Datalink changes have not been saved',
                    'The datalink changes have not been saved.  Do you want to discard the changes and exit?')
                    .then(confirm => {
                        resolve(confirm);
                    }).catch(() => {
                        resolve(false);
                    });
            } else {
                resolve(true);
            }
        });
    }

    // @HostListener allows us to also guard against browser refresh, close, etc.
    @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
        if (this.editDatalinkService.hubFormsService.hasChanged) {
            $event.returnValue = 'The datalink changes have not been saved.  Do you want to discard the changes and exit?';
        }
    }

    enableValidation() {
        if (!this.validationTransform) {
            this.validationTransform = this.editDatalinkService.enableValidation();
        }

        this.router.navigate(['validation'], { relativeTo: this.route });
    }

    disableValidation() {
        if (this.validationTransform) {
            this.editDatalinkService.disableValidation();
            this.validationTransform = null;
        }
    }

    refreshSource(sourceDatalinkTable: DexihDatalinkTable) {
        this.source = {
            name: sourceDatalinkTable.name,
            description: sourceDatalinkTable.description
        };

        switch(sourceDatalinkTable.sourceType) {
            case eSourceType.Datalink:
                this.source['icon'] = 'fa fa-exchange';
                this.source['link'] = ['source', 'preview-table-data', 'datalink', sourceDatalinkTable.sourceDatalinkKey];
                break;
            case eSourceType.Table:
                this.source['icon'] = 'fa fa-table';
                this.source['link'] = ['source', 'preview-table-data', 'table', sourceDatalinkTable.sourceTableKey];
                break;
            case eSourceType.Rows:
                this.source['icon'] = 'fa fa-bars';
                this.source['link'] = null;

        }
    }

    refreshTransforms() {
        this.logger.LogC(() => `refreshing transforms list`, eLogLevel.Trace);

        const transformsArray = <FormArray> this.datalinkForm.controls.dexihDatalinkTransforms;
        const transforms =  transformsArray.controls
            .filter(c => c.value.transformType !== eTransformType.Validation &&
                c.value.transformType !== eTransformType.Profile)
            .sort((a, b) => a.value.position - b.value.position);

        const datalinkTransforms = transforms.map(transform => {
            const type = transformTypes.find(c => c.key === transform.value.transformType);
            let icon = '';
            if (type) {
                icon = type.icon
            }
            const name = this.hubCache.getTransformName(transform.value);
            return {transform: transform, icon: icon, name: name, invalid: transform.invalid};
        });

        this.datalinkTransforms = datalinkTransforms;
    }

    deleteTransform(datalinkTransform: DexihDatalinkTransform) {
        this.logger.LogC(() => `deleteTransform`, eLogLevel.Trace);
        this.editDatalinkService.deleteDatalinkTransform(datalinkTransform).then(() => {
            this.refreshTransforms();
        });
    }

    previewData(datalinkTransform: DexihDatalinkTransform) {
        this.router.navigate(['transform', datalinkTransform.key, 'preview-transform-data'], { relativeTo: this.route });
    }

    saveDatalink() {
        this.editDatalinkService.hubFormsService.save();
    }

    cancel() {
        this.editDatalinkService.hubFormsService.cancel();
    }

}
