import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DexihDatalink, InputColumn, InputParameter, InputParameterBase } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({

    selector: 'datalink-run',
    templateUrl: './datalink-run.component.html'
})
export class DatalinkRunComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();

    private datalinks: DexihDatalink[];
    private hubCache: HubCache;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public parameters: InputParameterBase[];

    public truncateTable = false;
    public resetIncremental = false;
    public resetValue = '';

    isRefreshing = false;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (this.hubCache.isLoaded()) {
                    let datalinkKeys: string = params['datalinkKeys'];
                    this.datalinks = new Array<DexihDatalink>();

                    if (datalinkKeys) {
                        this.inputColumns = [];
                        this.parameters = [];
                        let datalinkKeyArray = datalinkKeys.split('|').map(c => +c);
                        datalinkKeyArray.forEach(datalinkKey => {
                            let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
                            this.datalinks.push(datalink);
                            datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput).forEach(c => {
                                this.inputColumns.push({datalinkKey: datalinkKey, datalinkName: datalink.name,
                                    name: c.name, logicalName: c.logicalName,
                                    dataType: c.dataType, rank: c.rank, value: c.defaultValue, defaultValue: c.defaultValue });
                            });
                            datalink.parameters.forEach( c => {
                                if (this.parameters.findIndex( p => p.name === c.name ) < 0) {
                                    this.parameters.push(c);
                                }
                            });
                        });
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Preview');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    runDatalinks() {
        this.hubService.runDatalinks(this.datalinks.map(c => c.key), this.truncateTable,
            this.resetIncremental, this.resetValue, this.inputColumns, this.parameters, this.cancelToken);
        this.authService.navigateUp();
    }
}
