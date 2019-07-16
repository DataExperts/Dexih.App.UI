import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubsService } from './hubs.service';
import { HubService } from '../+hub/hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { Message } from '../+auth/auth.models';
import { DexihMessageComponent } from '../shared/ui/dexihMessage';
import { AuthService } from '../+auth/auth.service';

@Component({
    selector: 'dexih-hubs',
    templateUrl: './hubs.component.html'
})
export class HubsComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    _hubsMessageSubscription: Subscription;
    _webSocketStatusSubscription: Subscription;
    webSocketStatus: string;
    openDelay = false; // used to pause the websocket error message displaying whilst a connect attempt occurs.

    constructor(private authService: AuthService, private hubsService: HubsService,
        private hubService: HubService, private router: Router, private route: ActivatedRoute) {
        // this.hubService.updateHub(0, 'unknown');
    }

    ngOnInit() {

        this._hubsMessageSubscription = this.hubsService.getHubMessagesObservable().subscribe(messages => {
            if (!messages || messages.length === 0) {
                this.dexihMessage.reset();
            } else {
                this.dexihMessage.addMessage(messages[messages.length - 1]);
            }
        });

        this._webSocketStatusSubscription = this.authService.getWebSocketStatusObservable().subscribe(status => {
            this.webSocketStatus = status;
        });

        setTimeout(() => {
            this.openDelay = true;
        }, 5000);

    }

    ngOnDestroy() {
        if (this._hubsMessageSubscription) { this._hubsMessageSubscription.unsubscribe(); }
        if (this._webSocketStatusSubscription) { this._webSocketStatusSubscription.unsubscribe(); }
    }

    @HostListener('window:focus', ['$event'])
    onFocus(event: any): void {
        this.openDelay = false;
        setTimeout(() => {
            this.openDelay = true;
        }, 5000);
    }
}
