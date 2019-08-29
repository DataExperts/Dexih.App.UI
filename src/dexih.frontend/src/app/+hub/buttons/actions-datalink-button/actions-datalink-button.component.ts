import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { DexihDatajob, DexihDatalink, HubCache, DexihHub, DexihTable, eViewSource, eSharedDataObjectType } from '../../hub.models';
import { HubService } from '../../hub.service';
import { DownloadObject, eDownloadFormat } from '../../hub.query.models';

@Component({
    selector: 'actions-datalink-button',
    templateUrl: './actions-datalink-button.component.html'
})

export class ActionsDatalinkButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinks: Array<DexihDatalink>;
    @Input() public showEdit = true;
    @Input() public pullRight = false;

    public hubCache: HubCache;

    relatedDatalinks = [];
    relatedDatajobs = [];

    datalink: DexihDatalink;
    targetTables: DexihTable[] = [];

    private _hubCacheSubscription: Subscription;

    constructor(
        private hubService: HubService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.hubCache || !this.hubCache.isLoaded()) { return; }

        if (this.datalinks && this.datalinks.length > 0) {
            // search any columns for an occurrence of the datajob.
            this.hubCache.hub.dexihDatajobs.forEach(datajob => {
                datajob.dexihDatalinkSteps.forEach(step => {
                    if ( step.datalinkKey === this.datalinks[0].key) {
                        this.relatedDatajobs.push({
                            key: datajob.key,
                            name: `${datajob.name} (datajob step)`
                        });
                    }
                });
            });

            this.hubCache.hub.dexihDatalinks.forEach(datalink => {
                if (datalink.sourceDatalinkTable && datalink.sourceDatalinkTable.sourceDatalinkKey === this.datalinks[0].key) {
                    this.relatedDatalinks.push({
                        key: datalink.key,
                        name: `${datalink.name} (datalink source)`
                    });
                }
            });

            this.datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === this.datalinks[0].key);
            if (this.datalink) {
                this.targetTables = [];
                this.datalink.dexihDatalinkTargets.forEach(target => {
                    if (target.tableKey) {
                        let table = this.hubCache.getTable(target.tableKey);
                        if (table) {
                            this.targetTables.push(table);
                        }
                    }
                });
            } else {
                this.targetTables = [];
            }
        } else {
            this.relatedDatajobs = [];
            this.relatedDatalinks = [];
        }
    }

    navigateToDatalink(datalink: DexihDatalink) {
        this.router.navigate(['datalinks', 'datalink-edit', 'edit', datalink.key], { relativeTo: this.route.parent.parent });
    }

    navigateToDatajob(datajob: DexihDatajob) {
        this.router.navigate(['datajobs', 'datajob-edit', datajob.key], { relativeTo: this.route.parent.parent });
    }

    delete() {
        this.hubService.deleteDatalinks(this.datalinks);
    }

    shareItems(isShared: boolean) {
        this.hubService.shareItems(this.datalinks.map(c => c.key), eSharedDataObjectType.Datalink, isShared);
    }

    async runDatalinks(truncateTarget: boolean, resetIncremental: boolean) {
        await this.hubService.runDatalinks(this.datalinks.map(c => c.key), truncateTarget, resetIncremental, null, null, null);
    }

    runDatalinksOptions() {
        let datalinks = this.datalinks.map(c => c.key);
        let datalinkString = datalinks.join('|');
        this.router.navigate(['datalinks', 'datalink-run', datalinkString], { relativeTo: this.route.parent.parent });
    }

    cancelDatalinks() {
        this.hubService.cancelDatalinks(this.datalinks.map(c => c.key)).catch();
    }

    createDatajob() {
        this.hubService.setNewDatajob(this.datalinks);
        this.router.navigateByUrl(this.hubCache.getHubUrl() + '/datajobs/datajob-new');
    }

    createDatalinkTests() {
        let datalinkKeys = this.datalinks.map(c => c.key).join('|');
        this.router.navigateByUrl(this.hubCache.getHubUrl() + '/datalinkTests/datalinkTest-new/' + datalinkKeys);
    }

    export() {
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        this.datalinks.forEach(datalink => { this.hubCache.cacheAddDatalink(datalink.key, hub); });

        let filename = this.datalinks.length === 1 ? 'Datalink - ' + this.datalinks[0].name + '.json' : 'datalinks.json';

        this.hubService.exportHub(hub, filename);
    }

    download() {
        let downloadItems = new Array<DownloadObject>();

        this.datalinks.forEach(c => {
            let downloadObject = new DownloadObject();
            downloadObject.objectKey = c.key;
            downloadObject.objectType = eViewSource.Datalink;
            downloadItems.push(downloadObject);
        });
        this.hubService.downloadData(downloadItems, true, eDownloadFormat.Csv)
    }

}
