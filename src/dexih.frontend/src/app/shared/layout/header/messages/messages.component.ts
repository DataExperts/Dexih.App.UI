// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AuthService } from '../../../../+auth/auth.service';
// import { Subscription, Observable, combineLatest} from 'rxjs';
// import { LayoutService } from '../../layout.service';
// import { WaitMessage } from '../../../../+auth/auth.models';

// @Component({
//     selector: 'messages',
//     templateUrl: './messages.component.html'
// })

// export class MessagesComponent implements OnInit, OnDestroy {
//     private _waitMessagesSubscription: Subscription;
//     private _layoutSubscription: Subscription;

//     public waitMessage: string;
//     waitMessages: Observable<Map<string, WaitMessage>>;

//     mobileViewActivated;

//     constructor(private authService: AuthService, private layoutService: LayoutService) { }

//     ngOnInit() {
//         this.waitMessages = this.authService.getWaitMessagesObservable();

//         this._waitMessagesSubscription = this.waitMessages.subscribe(waitMessages => {
//             if (waitMessages.size === 0) {
//               this.waitMessage = '';
//             } else if (waitMessages.size === 1) {
//               this.waitMessage = waitMessages.values().next().value;
//             } else {
//               this.waitMessage = `Waiting for ${waitMessages.size} operations...`;
//             }
//         });

//         this._layoutSubscription = this.layoutService.subscribe(store => {
//             this.mobileViewActivated = store.mobileViewActivated;
//           });

//     }

//     ngOnDestroy() {
//         if (this._waitMessagesSubscription) { this._waitMessagesSubscription.unsubscribe(); }
//     }
// }
