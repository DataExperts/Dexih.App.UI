import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, DexihConnection, HubCache, eConnectionPurpose, eSharedObjectType, connectionPurposes } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { RemoteLibraries } from '../../hub.remote.models';

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
    remoteLibraries: RemoteLibraries;
    purposeFilter: string;
    connectionPurposes = connectionPurposes;

    connections: Array<DexihConnection>;

    columns = [
        { name: 'name', title: 'Name', format: 'Md', footer: 'description' },
        { name: 'purpose', title: 'Purpose', format: '' },
        { name: 'type', title: 'Type', format: '' },
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
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
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.hubCache = result[3];
                this.remoteLibraries = result[4];

                this.purposeFilter = queryParams['purposeFilter'];
                if (!this.purposeFilter) { this.purposeFilter = 'All'; }


                this.pageTitle = this.purposeFilter + ' Connections';
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

    updateConnections() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let connections: Array<DexihConnection>;
            if (this.purposeFilter === 'All' || !this.purposeFilter) {
                connections = this.hubCache.hub.dexihConnections;
            } else {
                connections = this.hubCache.hub.dexihConnections
                    .filter(c => c.purpose === eConnectionPurpose[this.purposeFilter]);
            }

            let tableData = []
            connections.forEach(connection =>  {
                let connectionReference = this.remoteLibraries ? this.remoteLibraries.GetConnectionReference(connection) : null;
                tableData.push({
                    key: connection.key,
                    connectionAssemblyName: connection.connectionAssemblyName,
                    connectionClassName: connection.connectionClassName,
                    purpose: connection.purpose,
                    type: connectionReference ? connectionReference.name : 'Unknown (' + connection.connectionClassName + ')',
                    name: connection.name,
                    description: connection.description,
                    updateDate: connection.updateDate
                });
            });
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    export(connections: Array<DexihConnection>) {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        connections.forEach(connection => { this.hubCache.cacheAddConnection(connection.key, hub); });

        let filename = connections.length === 1 ? 'Connection - ' + connections[0].name + '.json' : 'connections.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Connection) {
                this.updateConnections();
            }
        });
    }
}
