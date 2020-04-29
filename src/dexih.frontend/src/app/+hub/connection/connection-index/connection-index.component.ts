import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { DexihConnection, eConnectionPurpose, DexihHub, eSharedObjectType, eConnectionPurposeItems } from '../../../shared/shared.models';

@Component({
    selector: 'connections',
    templateUrl: './connection-index.component.html',
    styles: []
})
export class ConnectionIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    pageTitle: string;

    hubCache: HubCache;
    purposeFilter: eConnectionPurpose;
    eConnectionPurpose = eConnectionPurpose;
    eConnectionPurposeItems = eConnectionPurposeItems;
    public eSharedObjectType = eSharedObjectType;
    connections: Array<DexihConnection>;

    columns = [
        { name: 'name', title: 'Name', format: 'Md', footer: 'description', tags: 'tags' },
        { name: 'purpose', title: 'Purpose', format: '' },
        { name: 'type', title: 'Type', format: '' },
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes in the connections.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.hubCache = result[3];

                this.purposeFilter = + queryParams['purposeFilter'];
                if (!this.purposeFilter) { this.purposeFilter = 0; }

                this.pageTitle = eConnectionPurpose[this.purposeFilter] + ' Connections';
                this.updateConnections();

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Connection Index');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    deleteConnection(connection: DexihConnection) {
        this.hubService.deleteConnections([connection]).catch(reason => {
        });
    }

    deleteConnections(connections: Array<DexihConnection>) {
        this.hubService.deleteConnections(connections);
    }

    editConnection(connection) {
        this.router.navigate(['connection-edit', connection.key], { relativeTo: this.route });
    }

    async updateConnections() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let connections: Array<DexihConnection>;
            if (this.purposeFilter === 0 || !this.purposeFilter) {
                connections = this.hubCache.hub.dexihConnections;
            } else {
                connections = this.hubCache.hub.dexihConnections
                    .filter(c => c.purpose === this.purposeFilter);
            }

            let tableData = []
            for await (const connection of connections)  {
                let connectionReference = await this.hubService.GetConnectionReference(connection);
                tableData.push({
                    key: connection.key,
                    connectionAssemblyName: connection.connectionAssemblyName,
                    connectionClassName: connection.connectionClassName,
                    purpose: eConnectionPurpose[connection.purpose],
                    type: connectionReference ? connectionReference.name : 'Unknown (' + connection.connectionClassName + ')',
                    name: connection.name,
                    tags: this.hubCache.getObjectTags(eSharedObjectType.Connection, connection.key),
                    description: connection.description,
                    updateDate: connection.updateDate
                });
            };
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    export(connections: Array<DexihConnection>) {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        connections.forEach(connection => { this.hubCache.cacheAddConnection(connection.key, hub); });

        let filename = connections.length === 1 ? 'Connection - ' + connections[0].name + '.json' : 'connections.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Connection
                || hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
                this.updateConnections();
            }
        });
    }
}
