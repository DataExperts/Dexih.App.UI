import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { HubCache } from '../../hub.models';
import { DexihFileFormat, DexihHub, eSharedObjectType } from '../../../shared/shared.models';

@Component({
    selector: 'fileFormats',
    templateUrl: './fileFormat-index.component.html',
    styles: []
})
export class FileFormatIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    fileFormats: Array<DexihFileFormat>;
    public eSharedObjectType = eSharedObjectType;

    columns = [
        { name: 'name', title: 'Name', footer: 'description', format: 'Md', tags: 'tags' },
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes in the validations.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.updateFileFormats();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'File Format Index');
        }


    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    deleteFileFormats(fileFormats: Array<DexihFileFormat>) {
        this.hubService.deleteFileFormats(fileFormats);
    }

    updateFileFormats() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let fileFormats = this.hubCache.hub.dexihFileFormats.filter(c => c.isValid).map(c => {
                return {
                    key: c.key,
                    name: c.name,
                    description: c.description,
                    updateDate: c.updateDate,
                    tags: this.hubCache.getObjectTags(eSharedObjectType.FileFormat, c.key)
                }
            });
            this._tableData.next(fileFormats);
        } else {
            this._tableData.next(null);
        }
    }

    editFileFormat(fileFormat: DexihFileFormat) {
        this.router.navigate(['fileFormat-edit', fileFormat.key], { relativeTo: this.route });
    }

    export(items: Array<DexihFileFormat>) {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        items.forEach(item => { this.hubCache.cacheAddFileFormat(item.key, hub); });

        let filename = items.length === 1 ? 'FileFormat - ' + items[0].name + '.json' : 'fileFormats.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
        // watch the current validation in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.FileFormat ||
                hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
                this.updateFileFormats();
            }
        });
    }
}
