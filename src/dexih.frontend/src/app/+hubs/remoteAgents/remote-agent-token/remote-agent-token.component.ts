import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { RemoteToken } from '../../../+auth/auth.models';
import { FormsService } from '../../../shared/forms/forms.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';
import { HubsService } from '../../hubs.service';

@Component({
    selector: 'remote-agent-token',
    templateUrl: './remote-agent-token.component.html',
    providers: [FormsService]
})
export class RemoteAgentTokenComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public remoteToken: RemoteToken;
    public appSettings: string;
    public action: string;

    constructor(
        private route: ActivatedRoute,
        private hubsService: HubsService,
        private authService: AuthService) {
    }

    ngOnInit() {
        this._subscription = combineLatest(
            this.route.data,
            this.route.params,
          ).subscribe(async result => {
            let data = result[0];
            let params = result[1];
            this.action = data.action;

            let promise: Promise<RemoteToken>;

            if (data.action === 'New') {
                promise = this.authService.createRemoteAgent();
            } else {
                const remoteAgentKey = +params['remoteAgentKey'];
                promise = this.authService.refreshRemoteAgentToken(remoteAgentKey);
            }

            promise.then(remoteToken => {
                this.remoteToken = remoteToken;
                this.updateAppSettings();
            }).catch(reason => {
                this.hubsService.addHubMessage(reason);
                this.authService.navigateUp();
            });

          });
    }

    updateAppSettings() {
        this.appSettings = `"RemoteAgentId": "${this.remoteToken.remoteAgentId}",
"User": "${this.remoteToken.user}",
"UserToken": "${this.remoteToken.userToken}",
`
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
      }

    close() {
        this.authService.navigateUp();
    }

}
