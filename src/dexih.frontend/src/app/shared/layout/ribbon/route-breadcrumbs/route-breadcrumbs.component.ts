import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }    from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';
import { filter} from 'rxjs/operators';

@Component({
    selector: 'dexih-route-breadcrumbs',
    templateUrl: './route-breadcrumbs.component.html',
    styleUrls: ['./route-breadcrumbs.component.scss']
})
export class RouteBreadcrumbsComponent implements OnInit, OnDestroy {
    breadcrumbs: Array<Breadcrumb>;

    private _eventSubscription: Subscription;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
            let breadcrumbs = [];
            let currentRoute = this.route.root,
            url = '';
            do {
                let childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        let routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        let pageTitle = routeSnapshot.data['pageTitle'];
                        if (pageTitle &&
                            breadcrumbs.findIndex((value) => value.pageTitle === pageTitle) === -1 ) {
                            breadcrumbs.push({
                                pageTitle: pageTitle,
                                url: url
                            });
                        }
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this.breadcrumbs = breadcrumbs;
        });
    }

    ngOnDestroy() {
        if (this._eventSubscription) { this._eventSubscription.unsubscribe(); }
    }
}

export class Breadcrumb {
  constructor(
    public url: string,
    public pageTitle: string) { }
}
