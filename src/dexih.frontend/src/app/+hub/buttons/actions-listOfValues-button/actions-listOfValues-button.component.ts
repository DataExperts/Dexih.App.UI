import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { DexihListOfValues } from '../../../shared/shared.models';


@Component({
    selector: 'actions-listOfValues-button',
    templateUrl: './actions-listOfValues-button.component.html'
})

export class ActionsListOfValuesButtonComponent implements OnInit, OnDestroy {
    @Input() public listOfValues: DexihListOfValues;
    @Input() public pullRight = false;

    private _hubCacheSubscription: Subscription;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {

            if (cache.isLoaded()) {
                // search any columns for an occurrence of the columnValidation.
            }
        });

    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
     }


}
