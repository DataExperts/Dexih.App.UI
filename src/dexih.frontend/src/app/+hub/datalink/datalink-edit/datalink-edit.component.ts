import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HubService } from '../../hub.service';
import { DatalinkEditService } from './datalink-edit.service';
import { Subscription, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../logging';
import { HubCache, eCacheStatus } from '../../hub.models';
import { DexihDatalinkTransform, eTransformWriterMethod, DexihDatalink, eDatalinkType, eSourceType, eTransformType, DexihDatalinkTable } from '../../../shared/shared.models';

@Component({
    selector: 'dexih-datalink-edit-form',
    templateUrl: './datalink-edit.component.html'
})
export class DatalinkEditComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private _subscription: Subscription;
    private _datalinkFormSubscription: Subscription;
    private _datalinkTransformsSubscription: Subscription;

    private hubCache: HubCache;

    public savingDatalink = false;

    public action: string; // new or edit
    public pageTitle: string;

    public logger = new LogFactory('datalink-edit.component');
    public logCount = 0;

    public help: string;

    private _datalinkTransforms = new BehaviorSubject<Array<DexihDatalinkTransform>>(null);
    datalinkTransforms: Observable<Array<DexihDatalinkTransform>> = this._datalinkTransforms.asObservable();
    updatingTransforms = false;

    eTransformWriterMethod = eTransformWriterMethod;

    private isLoaded = false;

    showPage = false;
    showPageMessage = 'Loading datalink...';

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
                let params = result[1];
                this.hubCache = result[2];

                if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }

                this.editDatalinkService.init(this.hubCache);

                this.logger.LogC(() => `Subscription count: ${this.logCount++}`, eLogLevel.Trace);

                if (this.action === 'edit') {

                    // get the hub key from the route data, and update the service.
                    let datalinkKey: number = + params['datalinkKey'];
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
                    let datalinkKey: number = + params['datalinkKey'];
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
                    datalink.sourceDatalinkTable.sourceTableKey = +params['sourceTableKey'];
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

                        let datalinkTransforms = <FormArray>this.datalinkForm.controls.dexihDatalinkTransforms;
                        this.updateTransforms(datalinkTransforms.value);

                        // monitor any add/remove transforms to update the tabs.
                        if (this._datalinkTransformsSubscription) { this._datalinkTransformsSubscription.unsubscribe(); }
                        this._datalinkTransformsSubscription = datalinkTransforms.valueChanges.subscribe(dt => {
                            if (!this.updatingTransforms) {
                                this.updateTransforms(dt);
                            }
                        });

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
            });

            this.editDatalinkService.ngOnInit();

        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._datalinkFormSubscription) { this._datalinkFormSubscription.unsubscribe(); }
        if (this._datalinkTransformsSubscription) { this._datalinkTransformsSubscription.unsubscribe(); }

        // shut down service
        this.editDatalinkService.ngOnDestroy();
    }

    updateTransforms(datalinkTransforms: Array<any>) {
        this.updatingTransforms = true;
        this.logger.LogC(() => `updateTransforms`, eLogLevel.Trace);

        // update the transform names
        if (datalinkTransforms) {
            let transforms = datalinkTransforms
                .filter(c => c.transformType !== eTransformType.Delta && c.transformType !== eTransformType.Validation);
            this._datalinkTransforms.next(transforms.sort((a, b) => a.position - b.position));
        } else {
            this._datalinkTransforms.next(null);
        }
        this.updatingTransforms = true;
    }

    public canDeactivate(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (this.editDatalinkService.hubFormsService.hasChanged) {
                this.authService.confirmDialog('Datalink changes have not been saved',
                    'The datalink changes have not been saved.  Do you want to discard the changes and exit?')
                    .then(confirm => {
                        resolve(confirm);
                    }).catch(reason => {
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

    saveDatalink() {
        this.editDatalinkService.hubFormsService.save();
    }

    cancel() {
        this.editDatalinkService.hubFormsService.cancel();
    }

}
