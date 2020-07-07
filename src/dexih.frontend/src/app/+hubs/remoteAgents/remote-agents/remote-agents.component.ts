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
        { name: 'name', title: 'Name', format: '' },
        { name: 'connected', title: 'Status', format: 'Text', footer: 'ipAddress'},
        // { name: 'remoteAgentId', title: 'Remote Agent Id', format: ''},
        { name: 'user', title: 'Owner', format: ''},
        { name: 'version', footer: 'latestVersion', title: 'Version', format: 'Md', class: 'versionClass', tooltip: 'versionTooltip'},
        // { name: 'lastLoginIpAddress', title: 'Last Ip', format: ''},
        { name: 'lastLoginDateTime', title: 'Last Login', format: 'Calendar'},
    ];

    private activeAgents: DexihActiveAgent[];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();
    eDownloadUrlType = eDownloadUrlType;

    remoteAgents: DexihRemoteAgent[];

    public cancelToken: CancelToken = new CancelToken();

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
        this.cancelToken.cancel();
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
                    connected: 'active',
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
                    version: activeAgent.version,
                    latestVersion: 'Latest(' + activeAgent.latestVersion + ')',
                    versionTooltip: (activeAgent.upgradeAvailable ? 'Upgrade is available.' : 'Agent is up to date.'),
                    versionClass: (activeAgent.upgradeAvailable ? 'dexih-error-text' : ''),
                    activeAgent: activeAgent
                });
            } else {
                data.push({
                    remoteAgentKey: remoteAgent.remoteAgentKey,
                    connected: 'not connected',
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
                    latestVersion: '',
                    versionTooltip: '',
                    versionClass: '',
                    activeAgent: null
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

                this.authService.getFromExternal<any>(url, 'Testing remote agent connectivity...', cancelToken).then(result => {
                    if (result && result.status === 'alive') {
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

    edit(item) {
        this.router.navigate(['edit', item.remoteAgentKey], {relativeTo: this.route});
    }

    restartAgents(items) {
        let activeAgents = items.filter(c => c.activeAgent).map(c => c.activeAgent);

        if ( activeAgents.length === 0) {
            this.hubService.addHubErrorMessage('No active agents were selected.')
            return;
        }

        activeAgents.forEach(activeAgent => {
            this.hubsService.restartAgent(activeAgent, false, this.cancelToken);
        });
    }

    refresh() {
        this.authService.pingRemoteAgents();
    }
}
