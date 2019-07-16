import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubsService } from '../hubs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject} from 'rxjs';
import { AuthService } from '../../+auth/auth.service';
import { DexihHubAuth } from '../../+auth/auth.models';
import { HubService } from '../../+hub';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styles: []
})
export class HelpComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _hubCacheSubscription: Subscription;

    public path: string;
    public hubKey: number;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this._subscription = this.route.queryParams.subscribe(params => {
            let path = params['path'];
            if (path) {
                this.path = '/assets/help/' + path;
            } else {
                this.path = '/assets/help/intro/getting _started.md'
            }
        });

        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache && cache.hub) {
                this.hubKey = cache.hub.hubKey;
            } else {
                this.hubKey = null;
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    linkClick(link: string) {
        this.router.navigate([], { relativeTo: this.route, queryParams: {'path': link} });
    }

}
