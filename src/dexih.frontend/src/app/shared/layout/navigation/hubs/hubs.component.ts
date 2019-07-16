import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../../+hub/hub.service';
import { DexihHubAuth, User, ePermission } from '../../../../+auth/auth.models';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { eCacheStatus } from '../../../../+hub/hub.models';
import { HubsService } from '../../../../+hubs/hubs.service';

@Component({
    selector: 'dexih-hubs',
    templateUrl: './hubs.component.html'
})
export class HubsComponent implements OnInit, OnDestroy {

    hubs: Observable<Array<DexihHubAuth>>;
    hubCacheStatusSubscription: Subscription;
    hubStatusMessage: string;
    user: User;

    textClass = '';

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private router: Router) {
    }

    ngOnInit() {
        this.hubs = this.authService.getHubsObservable();
        this.authService.getUserObservable().subscribe(u => { this.user = u; });

        this.hubStatusMessage = 'No Hub Selected';

        this.hubCacheStatusSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            switch (hubCache.status) {
                case eCacheStatus.Loading:
                    this.textClass = 'text-info';
                    this.hubStatusMessage = hubCache.hub.name + '(Loading...)';
                    break;
                case eCacheStatus.Loaded:
                    this.textClass = 'text-success';
                    this.hubStatusMessage = hubCache.hub.name;
                    break;
                case eCacheStatus.NotLoaded:
                    this.textClass = 'text-danger';
                    this.hubStatusMessage = 'Cache Not loaded';
                    break;
                case eCacheStatus.NoHub:
                    this.textClass = 'text-danger';
                    this.hubStatusMessage = 'No Hub Selected';
                    break;
            }
        });
    }

    ngOnDestroy() {
        this.hubCacheStatusSubscription.unsubscribe();
    }


    openHub(hub: DexihHubAuth) {
        this.router.navigate(['/hub/' + hub.hubKey + '/summary']);
    }


    manageHubs() {
        this.router.navigate(['/hubs/hubs-view']);
    }
}
