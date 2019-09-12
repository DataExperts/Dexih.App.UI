import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HubService } from '../hub.service';
import { AuthService } from '../../+auth/auth.service';
import { HubCache, SearchResult, eSearchObjectType, SearchObjectTypes } from '../hub.models';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;
    private _searchSubscription: Subscription;
    public hubCache: HubCache;

    public searchForm: FormGroup;

    searchObjectTypes = SearchObjectTypes;
    eSearchObjectType = eSearchObjectType;

    searchResults: Array<SearchResult>;

    constructor(public hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.hubCache = result[3];

                this.searchForm = this.fb.group({
                    'searchString': [params['search'], [
                    ]],
                    'searchObject': [params['searchObject'], [
                    ]],
                });

                this.updateSearch();

                if (this._searchSubscription) { this._searchSubscription.unsubscribe(); }
                this._searchSubscription = this.searchForm.valueChanges
                    .pipe(debounceTime(500))
                    .subscribe(newValue => {
                        this.updateSearch();

                    });
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Search');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._searchSubscription) { this._searchSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    updateSearch() {
        if (!this.hubCache.isLoaded()) { return; }

        this.searchResults = this.hubCache.search(this.searchForm.value.searchString, this.searchForm.value.searchObject);

        if (history.pushState) {
            let newUrl = this.hubCache.getHubUrl() + '/search';
            let searchString = this.searchForm.value.searchString;
            let searchObject = this.searchForm.value.searchObject;
            if (searchString) {
                newUrl += '/' + searchObject + '/' + searchString;
            }
            this.router.navigateByUrl(newUrl);
        }
    }
}


