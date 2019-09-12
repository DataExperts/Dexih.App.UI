import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { DexihRemoteAgent, DexihRemoteAgentHub, eSharedObjectType } from '../../../shared/shared.models';

@Component({
    selector: 'remoteagents',
    templateUrl: './remoteAgent-index.component.html',
    styles: []
})
export class RemoteAgentIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    remoteAgents: Array<DexihRemoteAgent>;
    hubCache: HubCache;

    statusFilter: string;

    columns = [
        { name: 'connected', title: 'Connected', format: 'Boolean' },
        { name: 'isAuthorized', title: 'Authorized?', format: 'Boolean' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'user', title: 'User', format: ''},
        { name: 'dataPrivacyStatus', title: 'Data Privacy', format: '' },
        { name: 'isEncrypted', title: 'Encrypted?', format: 'Boolean' },
        { name: 'ipAddress', title: 'Current IP Address', format: '' },
        { name: 'remoteAgentId', title: 'Id', format: '' },
        { name: 'updateDate', title: 'Last Updated', format: 'DateTime' },
        { name: 'lastLoginDateTime', title: 'Last Login', format: 'DateTime' },
        { name: 'lastLoginIpAddress', title: 'Last IP Address', format: '' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(private hubService: HubService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
                this.authService.getRemoteAgentsObservable(),
                this.hubService.getRemoteAgentObservable() // this is included to ensure refresh when active agent changes.
            ).subscribe(result => {
                let queryParams = result[0];
                this.hubCache = result[1];
                this.remoteAgents = result[2];

                if (!this.hubCache.isLoaded()) { return; }

                this.statusFilter = queryParams['statusFilter'];
                if (!this.statusFilter) { this.statusFilter = 'All'; }

                this.updateRemoteAgents();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Remote Agent index');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    private updateRemoteAgents() {
        if (!(this.hubCache && this.hubCache.hub)) { return; }

        let data: any[] = this.hubCache.hub.dexihRemoteAgentHubs.map(a => {
            let remoteAgent = this.remoteAgents ? this.remoteAgents.find(c => c.remoteAgentKey === a.remoteAgentKey) : null;
            let activeAgent = remoteAgent && remoteAgent.activeAgents && remoteAgent.activeAgents.length > 0
                ? remoteAgent.activeAgents[0] : null;

            return {
                remoteAgentHubKey: a.remoteAgentHubKey,
                connected: activeAgent !== null,
                isAuthorized: a.isAuthorized,
                name: activeAgent ? activeAgent.name : ( remoteAgent ? remoteAgent.name : 'Unknown') ,
                user: activeAgent ? activeAgent.user : '',
                dataPrivacyStatus: activeAgent ? activeAgent.dataPrivacyStatus : '',
                isEncrypted: activeAgent ? activeAgent.isEncrypted : '',
                ipAddress: activeAgent ? activeAgent.ipAddress : '',
                remoteAgentKey: a.remoteAgentKey,
                updateDate: a.updateDate,
                lastLoginDateTime: remoteAgent ? remoteAgent.lastLoginDateTime : '',
                lastLoginIpAddress: remoteAgent ? remoteAgent.lastLoginIpAddress : ''
            };
        });

        if (this.remoteAgents) {
            this.remoteAgents.forEach(a => {
                let activeAgent = a.activeAgents && a.activeAgents.length > 0 ? a.activeAgents[0] : null;

                if (activeAgent && data.findIndex(d => d.remoteAgentKey === a.remoteAgentKey) < 0) {
                    data.push({
                        remoteAgentHubKey: 0,
                        connected: true,
                        isAuthorized: false,
                        name: activeAgent.name,
                        user:  activeAgent.user,
                        dataPrivacyStatus: activeAgent.dataPrivacyStatus,
                        isEncrypted: activeAgent.isEncrypted,
                        ipAddress: activeAgent.ipAddress,
                        remoteAgentKey: a.remoteAgentKey,
                        updateDate: '',
                        });
                }
            });
        }
        this._tableData.next(data);
    }

    watchChanges() {
        // watch the current remote hubs
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.RemoteAgent) {
                this.updateRemoteAgents();
            }
        });
    }

    authorize(remoteAgents: Array<any>) {
        remoteAgents.forEach(async remoteAgent => {
            if (!remoteAgent.isAuthorized) {
                let agentHub: DexihRemoteAgentHub;
                if (remoteAgent.remoteAgentHubKey) {
                    agentHub = this.hubCache.hub.dexihRemoteAgentHubs.find(c => c.remoteAgentHubKey === remoteAgent.remoteAgentHubKey);
                    agentHub.isAuthorized = true;
                } else {
                    agentHub = {
                        hubKey: this.hubCache.hub.hubKey,
                        remoteAgentHubKey: 0,
                        remoteAgentKey: remoteAgent.remoteAgentKey,
                        isAuthorized: true,
                        isValid: true,
                        createDate: null,
                        isDefault: false,
                        updateDate: null
                    }
                    agentHub['allowExternalConnect'] = true;
                    agentHub['isSelected'] = false;
                }
                await this.hubService.saveRemoteAgent(agentHub);
            }
        });
    }

    deAuthorize(remoteAgents: Array<DexihRemoteAgentHub>) {
        remoteAgents.forEach(remoteAgent => {
            if (remoteAgent.isAuthorized) {
                if (remoteAgent.remoteAgentHubKey) {
                    let agent = this.hubCache.hub.dexihRemoteAgentHubs.find(c => c.remoteAgentHubKey === remoteAgent.remoteAgentHubKey);
                    if (agent) {
                        agent.isAuthorized = false;
                        this.hubService.saveRemoteAgent(agent);
                    }
                }
            }
        });
    }

    deleteSelected(remoteAgents: Array<DexihRemoteAgentHub>) {
        remoteAgents.forEach(remoteAgent => {
            if (remoteAgent.remoteAgentHubKey) {
                let agent = this.hubCache.hub.dexihRemoteAgentHubs.find(c => c.remoteAgentHubKey === remoteAgent.remoteAgentHubKey);
                if (agent) {
                    agent.isAuthorized = false;
                    this.hubService.deleteRemoteAgent(agent);
                }
            }
        });
    }

    edit(remoteAgent: DexihRemoteAgentHub) {
        this.router.navigate(['agent-edit', remoteAgent.remoteAgentKey, remoteAgent.remoteAgentHubKey], { relativeTo: this.route });
    }
}
