import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { DexihRemoteAgentHub, DexihRemoteAgent } from '../../../shared/shared.models';

@Component({
    selector: 'remote-agents',
    templateUrl: './remoteAgent-edit.component.html',
    providers: [HubFormsService]
})
export class RemoteAgentEditComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;

    public remoteAgentKey: number;
    private remoteAgentHubKey: number;

    hubCache: HubCache;
    name: string;

    remoteAgents: DexihRemoteAgent[];
    remoteAgentHub: DexihRemoteAgentHub;

    public isNew = false;

    ipAddress: string;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        public formsService: HubFormsService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.authService.getRemoteAgentsObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.remoteAgents = result[3];

                if (!this.hubCache.isLoaded() || !this.remoteAgents) { return; }

                this.remoteAgentKey = +params['remoteAgentKey'];
                this.remoteAgentHubKey = +params['remoteAgentHubKey'];

                if (!this.remoteAgentKey) {
                    this.hubService.addHubErrorMessage('There was no remote agent specified to edit.');
                    // this.errorMessage = 'There was no validation specified to edit.';
                } else {
                    let remoteAgent = this.remoteAgents.find(c => c.remoteAgentKey === this.remoteAgentKey);
                    let activeAgent = remoteAgent['activeAgents'] &&
                        remoteAgent['activeAgents'].length > 0 ? remoteAgent['activeAgents'][0] : null;
                    this.name = activeAgent ? activeAgent.name : '';
                    this.ipAddress = activeAgent ? activeAgent.ipAddress : null;
                    this.remoteAgentHub = this.hubCache.hub.dexihRemoteAgentHubs.find(c => c.remoteAgentHubKey === this.remoteAgentHubKey);

                    if (!this.remoteAgentHub) {
                        this.remoteAgentHub = {
                            hubKey: this.hubCache.hub.hubKey,
                            remoteAgentHubKey: 0,
                            remoteAgentKey: remoteAgent.remoteAgentKey,
                            isAuthorized: true,
                            isValid: true,
                            createDate: null,
                            isDefault: false,
                            updateDate: null
                        }
                        this.remoteAgentHub['allowExternalConnect'] = true;
                        this.remoteAgentHub['isSelected'] = false;
                        this.isNew = true;
                    }

                    this.formsService.remoteAgent(this.remoteAgentHub);

                    if (this.remoteAgentHub.remoteAgentHubKey === 0) {
                        this.formsService.hasChanged = true;
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Remote Agent Edit');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    addCurrentIp() {
        if (this.ipAddress) {
            let form = this.formsService.currentForm;
            let ipAddressesControl = form.controls.ipAddresses;
            let ipAddresses = <string[]> ipAddressesControl.value;

            if (ipAddresses.findIndex(c => c === this.ipAddress) < 0) {
                ipAddresses.push(this.ipAddress);
                ipAddressesControl.setValue(ipAddresses);
            }
        }
    }

    save() {
        let form = this.formsService.currentForm;
        let remoteAgentHub = form.value;
        this.hubService.saveRemoteAgent(remoteAgentHub).then((success) => {
            if (success) {
                this.hubService.addHubSuccessMessage('The remote agent updated successfully.');
                this.authService.navigateUp();
            }
        });
    }
}
