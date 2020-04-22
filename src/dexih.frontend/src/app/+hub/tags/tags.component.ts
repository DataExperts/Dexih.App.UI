import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { HubCache } from '../hub.models';
import { DexihTag, eSharedObjectType } from '../../shared/shared.models';
import { HubService } from '..';
import { AuthService } from '../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HubFormsService } from '../hub.forms.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'tags',
    templateUrl: 'tags.component.html',
    providers: [HubFormsService],
    animations: [
        // trigger name for attaching this animation to an element using the [@triggerName] syntax
        trigger('slideDown', [
            state('hide', style({ height: 0, overflow: 'hidden' })),
            state('show', style({ height: '*', overflow: 'unset' })),
            transition('hide <=> show', animate('200ms ease-in')),
        ])
        ]
})
export class TagsComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    tags: Array<DexihTag>;
    state = 'hide';

    colors = [
        { name: 'primary', color: '#3a5f8d' },
        { name: 'secondary', color : '#89B3BF'},
        { name: 'success', color : '#479762'},
        { name: 'warning', color : '#c4872a' },
        { name: 'danger', color : '#f44336' },
        { name: 'yellow', color : 'yellow'},
        { name: 'pink', color : 'pink'},
        { name: 'purple', color : 'purple'},
        { name: 'dark', color : '#1F2624'},
    ]

    columns = [
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        public formsService: HubFormsService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes in the validations.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let params = result[0];
                this.hubCache = result[1];

                if (params['key']) {
                    let tag = this.hubCache.hub.dexihTags.find(c => c.key === +params['key']);
                    if (tag) {
                        let editTag = this.hubCache.hub.dexihTags.find(c => c.key === tag.key);
                        this.formsService.tag(editTag);
                        this.state = 'show';
                    }
                }

                this.update();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }


    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }


    update() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let tags: Array<DexihTag>;
            tags = this.hubCache.hub.dexihTags.filter(c => c.isValid);
            let tableData = tags.map(tag => {
                return {
                    key: tag.key,
                    name: tag.name,
                    description: tag.description,
                    color: tag.color,
                    updateDate: tag.updateDate,
                };
            });
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    new() {
        let tag = new DexihTag();
        this.formsService.tag(tag);
        this.state = 'show';
    }

    edit(tag: DexihTag) {
        let editTag = this.hubCache.hub.dexihTags.find(c => c.key === tag.key);
        this.formsService.tag(editTag);
        this.state = 'show';
        if (history.pushState) {
            this.router.navigateByUrl(window.location.pathname + `?key=${tag.key}`);
        }
    }

    delete(tags: DexihTag[]) {
        this.hubService.deleteTags(tags);
    }

    save() {
        this.formsService.save(false).then(() => {
            this.hide();
        }).catch();
    }

    cancel() {
        this.hide();
    }

    hide() {
        this.state = 'hide';
        if (history.pushState) {
            if (window.location.search) {
                this.router.navigateByUrl(window.location.pathname);
            }
          }
    }

    selectColor(color) {
        this.formsService.currentForm.controls.color.setValue(color.color);
    }

    export(items: Array<DexihTag>) {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(cache.hub.hubKey, '');
        items.forEach(item => { cache.cacheAddTag(item.key, hub); });

        let filename = items.length === 1 ? 'Tag - ' + items[0].name + '.json' : 'tags.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
        // watch the current validation in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Tags) {
                this.update();
            }
        });
    }
}
