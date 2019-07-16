import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { DexihActiveAgent, DexihRemoteAgent } from '../../../+auth/auth.models';
import { FormsService } from '../../../shared/forms/forms.service';
import { HubsService } from '../../hubs.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'remote-agents',
    templateUrl: './remoteAgent-edit.component.html',
    providers: [FormsService]
})
export class RemoteAgentEditComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;

    private remoteAgentKey: number;
    private remoteAgentHubKey: number;

    remoteAgents: DexihRemoteAgent[];

    ipAddress: string;

    constructor(
        private authService: AuthService,
        private hubsService: HubsService,
        public formsService: FormsService,
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.authService.getRemoteAgentsObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.remoteAgents = result[2];

                if (!this.remoteAgents) {
                    return;
                }

                this.remoteAgentKey = +params['remoteAgentKey'];

                this.hubsService.remoteAgents().then(remoteAgents => {
                    let remoteAgent = this.remoteAgents.find(c => c.remoteAgentKey === this.remoteAgentKey);

                    const remoteAgentForm = this.fb.group({});
                    this.formsService.addMissing(remoteAgent, remoteAgentForm, new DexihRemoteAgent());
                    remoteAgentForm.controls.name.disable();
                    remoteAgentForm.controls.remoteAgentId.disable();
                    this.formsService.clearFormSubscriptions();
                    this.formsService.startForm(remoteAgentForm);
                }).catch(reason => {

                });
            });
        } catch (e) {
            this.hubsService.addHubClientErrorMessage(e, 'Remote Agent Edit');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    save() {
        this.authService.saveRemoteAgent(this.formsService.currentForm.value);
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
}
