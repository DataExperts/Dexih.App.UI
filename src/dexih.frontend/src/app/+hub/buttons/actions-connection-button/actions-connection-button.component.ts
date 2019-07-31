import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription ,  Observable, combineLatest} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { DexihConnection, DexihDatajob, DexihDatalink, HubCache, DexihHub } from '../../hub.models';
import { HubService } from '../../hub.service';
import { RemoteLibraries, ConnectionReference, eConnectionCategory } from '../../hub.remote.models';

@Component({
    selector: 'actions-connection-button',
    templateUrl: './actions-connection-button.component.html'
})

export class ActionsConnectionButtonComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public connections: DexihConnection[];
    @Input() public hideEdit = false;
    @Input() public pullRight = false;

    public connectionReference: ConnectionReference;
    eConnectionCategory = eConnectionCategory;

    private _subscription: Subscription;

    public hubCache: HubCache;
    public remoteLibrary: RemoteLibraries;

    public hubPath: string;

    datalinks = [];
    datajobs = [];

    constructor(
        private authService: AuthService,
        private hubService: HubService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable(),
            this.hubService.getRemoteLibrariesObservable()
        ).subscribe(result => {
            this.hubCache = result[0];
            this.remoteLibrary = result[1];

            if (!this.hubCache.isLoaded() || !this.remoteLibrary ) {
                return;
            }

            this.hubPath = this.hubCache.getHubUrl();

            this.datalinks = [];
            this.datajobs = [];

            let cache = this.hubCache;

            if (this.connections && this.connections.length === 1) {
                this.connectionReference = this.remoteLibrary.GetConnectionReference(this.connections[0]);

                // search any columns for an occurrence of the columnValidation.
                cache.hub.dexihDatajobs.forEach(datajob => {
                    if ( datajob.auditConnectionKey === this.connections[0].key) {
                        this.datajobs.push({
                            key: datajob.key,
                            name: `${datajob.name} (datajob audit connection)`
                        });
                    }
                });

                cache.hub.dexihDatalinks.forEach(datalink => {
                    if ( datalink.auditConnectionKey === this.connections[0].key) {
                        this.datalinks.push({
                            key: datalink.key,
                            name: `${datalink.name} (datalink audit connection)`
                        });
                    }

                    if (datalink.sourceDatalinkTable && datalink.sourceDatalinkTable.sourceTableKey) {
                        let table = cache.getTable(datalink.sourceDatalinkTable.sourceTableKey);
                        if (table && table.connectionKey === this.connections[0].key) {
                            this.datalinks.push({
                                key: datalink.key,
                                name: `${datalink.name} (datalink source)`
                            });
                        }
                    }

                    datalink.dexihDatalinkTransforms.forEach(transform => {
                        if (transform.joinDatalinkTable && transform.joinDatalinkTable.sourceDatalinkKey) {
                            let table = cache.getTable(transform.joinDatalinkTable.sourceTableKey);
                            if (table && table.connectionKey === this.connections[0].key) {
                                this.datalinks.push({
                                    key: datalink.key,
                                    name: `${datalink.name} (datalink join)`
                                });
                            }
                        }
                    });

                    datalink.dexihDatalinkTargets.forEach(target => {
                        let table = cache.getTable(target.tableKey);
                        if (table && table.connectionKey === this.connections[0].key) {
                            this.datalinks.push({
                                key: datalink.key,
                                name: `${datalink.name} (datalink target)`
                            });
                        }
                    });
                });
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    ngOnChanges() {
        if (this.connections && this.connections.length === 1 && this.remoteLibrary ) {
            this.connectionReference = this.remoteLibrary.GetConnectionReference(this.connections[0]);
        }
    }

    export() {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        this.connections.forEach(connection => { this.hubCache.cacheAddConnection(connection.key, hub); });

        let filename = this.datalinks.length === 1 ? 'Connection - ' + this.connections[0].name + '.json' : 'connections.json';

        this.hubService.exportHub(hub, filename);
    }

    delete() {
        this.hubService.deleteConnections(this.connections);
    }

    navigateToDatalink(datalink: DexihDatalink) {
        this.router.navigate(['datalinks', 'datalink-edit', 'edit', datalink.key], { relativeTo: this.route.parent.parent });
    }

    navigateToDatajob(datajob: DexihDatajob) {
        this.router.navigate(['datajobs', 'datajob-edit', datajob.key], { relativeTo: this.route.parent.parent });
    }

}
