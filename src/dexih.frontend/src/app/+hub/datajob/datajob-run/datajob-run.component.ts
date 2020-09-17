import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DexihDatajob, InputParameter } from '../../../shared/shared.models';
import { HubCache } from '../../hub.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({

    selector: 'datajob-run',
    templateUrl: './datajob-run.component.html'
})
export class DatajobRunComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();

    private datajobs: DexihDatajob[];
    private hubCache: HubCache;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;


    public truncateTable = false;
    public resetIncremental = false;
    public resetValue = '';

    parameters: InputParameter[];

    isRefreshing = false;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest([
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()]
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (this.hubCache.isLoaded()) {
                    let datajobKeys: string = params['datajobKeys'];
                    this.datajobs = new Array<DexihDatajob>();

                    if (datajobKeys) {
                        this.parameters = [];
                        let datajobKeyArray = datajobKeys.split('|').map(c => +c);
                        datajobKeyArray.forEach(datajobKey => {
                            let datajob = this.hubCache.hub.dexihDatajobs.find(c => c.key === datajobKey);
                            this.datajobs.push(datajob);
                            datajob.parameters.forEach(c => {
                                if (this.parameters.findIndex(p => c.name === p.name) < 0) {
                                    this.parameters.push({name: c.name, value: c.value, rank: c.rank});
                                }
                            });
                        });
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datajob Run');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    run() {
        this.hubService.runDatajobs(this.datajobs, this.truncateTable,
            this.resetIncremental, this.resetValue, this.parameters, this.cancelToken);
        this.authService.navigateUp();
    }

    activate() {
        this.hubService.activateDatajobs(this.datajobs, this.parameters, this.cancelToken);
        this.authService.navigateUp();
    }

}
