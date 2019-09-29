import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest } from 'rxjs';
import { HubService } from '../../hub.service';
import { DexihRemoteAgentHub } from '../../../shared/shared.models';


@Component({
    selector: 'remoteAgent-view',
    templateUrl: './remoteAgent-view.component.html'
})

export class RemoteAgentViewComponent implements OnInit, OnDestroy {
    @Input() remoteAgent: DexihRemoteAgentHub;

    _subscription: Subscription;

    public name: string;
    public isAuthorized: boolean;
    public isEncrypted: boolean;
    public lastLoginDateTime: Date;
    public isConnected: boolean;
    public isSelected: boolean;

    constructor(private hubService: HubService, private authService: AuthService) { }

    ngOnInit() {
        this._subscription = combineLatest(
            this.authService.getRemoteAgentsObservable(),
            this.hubService.getRemoteAgentObservable(),
        ).subscribe(result => {
            let remoteAgents = result[0];
            let selectedAgent = result[1];

            if (!remoteAgents) { return; }

            let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === this.remoteAgent.remoteAgentKey);
            let activeAgent = remoteAgent && remoteAgent['activeAgents'] && remoteAgent['activeAgents'].length > 0
                ? remoteAgent['activeAgents'][0] : null;

            this.isAuthorized = this.remoteAgent.isAuthorized;
            this.isConnected = activeAgent ? true : false;

            if (remoteAgent) {
                if (selectedAgent && remoteAgent.remoteAgentKey === selectedAgent.remoteAgentKey) {
                    this.isSelected = true;
                } else {
                    this.isSelected = false;
                }
                this.name = activeAgent ? activeAgent.name : ( remoteAgent ? remoteAgent.name : 'Unknown');
                this.isEncrypted = activeAgent ? activeAgent.isEncrypted : false;
                this.lastLoginDateTime = remoteAgent ? remoteAgent.lastLoginDateTime : null;
            } else {
                this.name = 'Unknown';
                this.isEncrypted = false;
                this.lastLoginDateTime = null;
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }
}
