import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../../+hub/hub.service';
import { DexihHubAuth, User, eHubAccess } from '../../../../+auth/auth.models';
import { Observable, Subscription} from 'rxjs';
import { eCacheStatus } from '../../../../+hub/hub.models';
import { MenuParentComponent } from '../menu';

@Component({
    selector: 'dexih-hubs',
    templateUrl: './hubs.component.html'
})
export class HubsComponent implements OnInit, OnDestroy {
    @ViewChild('menu', { static: true }) menu: MenuParentComponent;

    hubs: Observable<Array<DexihHubAuth>>;
    hubCacheStatusSubscription: Subscription;
    hubStatusMessage: string;
    user: User;

    eHubAccess = eHubAccess;

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
        this.menu.collapse();
        this.router.navigate(['/hub/' + hub.hubKey + '/summary']);
    }


    manageHubs() {
        this.router.navigate(['/hubs/hubs-view']);
    }
}
