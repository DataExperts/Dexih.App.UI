import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { HubsService } from './hubs.service';
import { Subscription} from 'rxjs';
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

    constructor(private authService: AuthService, private hubsService: HubsService) {
        authService.initialize();
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
    onFocus(): void {
        this.openDelay = false;
        setTimeout(() => {
            this.openDelay = true;
        }, 5000);
    }
}
