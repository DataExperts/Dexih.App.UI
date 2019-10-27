import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubsService } from '../../hubs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { DexihActiveAgent, DexihRemoteAgent, eDownloadUrlType } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
  selector: 'remoteAgents',
  templateUrl: './remote-agents.component.html',
  styles: []
})
export class RemoteAgentsComponent implements OnInit, OnDestroy {

    columns = [
        { name: 'connected', title: 'Connected', format: 'Boolean'},
        { name: 'name', title: 'Name', format: '' },
        { name: 'remoteAgentId', title: 'Remote Agent Id', format: ''},
        { name: 'user', title: 'Owner', format: ''},
        { name: 'ipAddress', title: 'Current IP', format: '' },
        { name: 'version', title: 'Version', format: 'Md', class: 'versionClass'},
        { name: 'lastLoginIpAddress', title: 'Last Ip', format: ''},
        { name: 'lastLoginDateTime', title: 'Last Login', format: 'DateTime'},
    ];

    private activeAgents: DexihActiveAgent[];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();
    eDownloadUrlType = eDownloadUrlType;

    remoteAgents: DexihRemoteAgent[];

    private _subscription: Subscription;

    constructor(
        private hubsService: HubsService,
        private authService: AuthService,
        private hubService: HubsService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
            this._subscription = this.authService.getRemoteAgentsObservable().subscribe(remoteAgents => {
                if (remoteAgents) {
                    this.remoteAgents = remoteAgents;
                    this.refreshData();
                }
            });
    }

    ngOnDestroy() {
        if (this._subscription) {this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    refreshData() {
        let data = [];
        this.remoteAgents.forEach(remoteAgent => {
            let activeAgent = remoteAgent['activeAgents'] && remoteAgent['activeAgents'].length > 0 ? remoteAgent['activeAgents'][0] : null;

            if (activeAgent) {
                data.push({
                    remoteAgentKey: remoteAgent.remoteAgentKey,
                    connected: true,
                    name: activeAgent ? activeAgent.name : ( remoteAgent ? remoteAgent.name : 'Unknown') ,
                    user: activeAgent.user,
                    dataPrivacyStatus: activeAgent.dataPrivacyStatus,
                    isEncrypted: activeAgent.dataPrivacyStatus,
                    ipAddress: activeAgent.ipAddress,
                    restrictIp: remoteAgent.restrictIp,
                    ipAddresses: remoteAgent.ipAddresses,
                    lastLoginIpAddress: remoteAgent.lastLoginIpAddress,
                    lastLoginDateTime: remoteAgent.lastLoginDateTime,
                    remoteAgentId: remoteAgent.remoteAgentId,
                    downloadUrls: activeAgent.downloadUrls,
                    instanceId: activeAgent.instanceId,
                    version: 'Current: ' + activeAgent.version +
                        '<br> Latest: ' + activeAgent.latestVersion +
                        (activeAgent.upgradeAvailable ? '<br>Upgrade Required!' : ''),
                    versionClass: (activeAgent.upgradeAvailable ? 'dexih-error-text' : ''),
                });
            } else {
                data.push({
                    remoteAgentKey: remoteAgent.remoteAgentKey,
                    connected: false,
                    name: remoteAgent.name,
                    user: '',
                    dataPrivacyStatus: '',
                    isEncrypted: '',
                    ipAddress: '',
                    restrictIp: remoteAgent.restrictIp,
                    ipAddresses: remoteAgent.ipAddresses,
                    lastLoginIpAddress: remoteAgent.lastLoginIpAddress,
                    lastLoginDateTime: remoteAgent.lastLoginDateTime,
                    remoteAgentId: remoteAgent.remoteAgentId,
                    downloadUrls: [],
                    instanceId: null,
                    version: '',
                    versionClass: ''
                });
            }
        });

        this._tableData.next(data);
    }

    test(items: DexihActiveAgent[], cancelToken: CancelToken) {
        items.forEach(item => {
            let agent = <DexihActiveAgent>item;
            agent.downloadUrls.forEach((downloadUrl, index) => {
                let url = downloadUrl.url + '/ping';

                this.authService.get<any>(url, 'Testing remote agent connectivity...', false, cancelToken).then(result => {
                    if (result && result.Status === 'Alive') {
                        downloadUrl['testStatus'] = 'success';
                    } else {
                        downloadUrl['testStatus'] = 'error';
                        downloadUrl['testMessage'] = 'Server returned invalid message.';
                    }
                }).catch(reason => {
                    downloadUrl['testStatus'] = 'error';
                    downloadUrl['testMessage'] = reason.message;
                });
            })
        });
    }

    removeUserTokens(items) {
        this.authService.removeUserTokens(items.map(c => c.remoteAgentKey))
        .then( result => this.refreshData())
        .catch(reason => this.hubsService.addHubClientErrorMessage(reason, 'Remove tokens'));
    }

    refreshUserToken(item) {
        // this.authService.refreshRemoteAgentToken(item.remoteAgentKey).then( result => this.refreshData());
        this.router.navigate(['token-renew', item.remoteAgentKey], {relativeTo: this.route});
    }

    restartAgents(items) {
        let instanceIds = items.filter(c => c.instanceId).map(c => c.instanceId);
        this.hubsService.restartAgents(instanceIds, false);
    }

    edit(item) {
        this.router.navigate(['edit', item.remoteAgentKey], { relativeTo: this.route });
    }

    createToken() {
        this.router.navigate(['token-new'], {relativeTo: this.route});
        // this.authService.createRemoteAgent().then( result => this.refreshData());
    }

    refresh() {
        this.authService.pingRemoteAgents();
    }
}
