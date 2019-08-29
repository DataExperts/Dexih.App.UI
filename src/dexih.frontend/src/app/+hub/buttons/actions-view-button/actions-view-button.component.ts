import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { DexihView, eSharedDataObjectType } from '../../hub.models';
import { HubService } from '../../hub.service';

@Component({
    selector: 'actions-view-button',
    templateUrl: './actions-view-button.component.html'
})

export class ActionsViewButtonComponent implements OnInit, OnDestroy {
    @Input() public views: DexihView[];
    @Input() public pullRight = false;

    private _hubCacheSubscription: Subscription;

        tables = [];

        constructor(
            private authService: AuthService,
            private hubService: HubService,
                    private router: Router,
                    private route: ActivatedRoute) { }

        ngOnInit() {
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            });

        }

        ngOnDestroy() {
            if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
         }

         delete() {
            this.hubService.deleteViews(this.views);
        }

        shareItems(isShared: boolean) {
            this.hubService.shareItems(this.views.map(c => c.key), eSharedDataObjectType.View, isShared);
        }


}
