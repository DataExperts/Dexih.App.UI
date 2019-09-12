import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';
import { HubService } from '../../../../+hub/hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { HubCache } from '../../../../+hub/hub.models';
import { DexihActiveAgent, eDataPrivacyStatus } from '../../../shared.models';

@Component({

    selector: 'dexih-remote-agent',
    templateUrl: './remote-agent.component.html'
})
export class RemoteAgentComponent implements OnInit, OnDestroy {
    hubCache: HubCache;

    activeHubAgents: Array<DexihActiveAgent>;

    selectedRemoteAgent: DexihActiveAgent;

    hubKey: number;

    _subscription: Subscription;

    eDataPrivacyStatus = eDataPrivacyStatus;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private router: Router
        ) {
    }

    ngOnInit() {
        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable(),
            this.hubService.getRemoteAgentObservable(),
            this.authService.getRemoteAgentsObservable(),
        ).subscribe(result => {
            this.hubCache = result[0];
            let remoteAgents = result[2];

            if (!remoteAgents) {
                this.selectedRemoteAgent = null;
                this.activeHubAgents = null;
                return;
            }

            if (this.hubCache.isLoaded()) {
                 this.hubKey = this.hubCache.hub.hubKey;
                 let remoteAgentHubs = this.hubCache.hub.dexihRemoteAgentHubs.filter(c => c.isAuthorized);
                 this.activeHubAgents = [];
                 remoteAgentHubs.forEach(r => {
                    let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === r.remoteAgentKey);
                    if (remoteAgent) {
                        this.activeHubAgents = this.activeHubAgents.concat(remoteAgent.activeAgents);
                    }
                 });

                 if (this.activeHubAgents.length > 0 ) {
                     console.log('Remote Agents updated, count = ' + this.activeHubAgents.length);
                    this.selectedRemoteAgent = result[1];
                 } else {
                     this.selectedRemoteAgent = null;
                 }
            } else {
                this.hubKey = null;
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    editRemoteAgent(activeAgent: DexihActiveAgent) {
        let remoteAgentHub = this.hubCache.hub.dexihRemoteAgentHubs
            .find(c => c.isAuthorized && c.remoteAgentKey === activeAgent.remoteAgentKey);

        this.router.navigate(['/hub', this.hubKey, 'agents', 'agent-edit', activeAgent.remoteAgentKey, remoteAgentHub.remoteAgentHubKey]);
    }

    setRemoteAgent(activeAgent: DexihActiveAgent) {
        this.hubService.setCurrentRemoteAgent(activeAgent);
    }

    refresh() {
        this.authService.pingRemoteAgents();
    }
}
