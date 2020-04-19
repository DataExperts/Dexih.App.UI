import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Subscription} from 'rxjs';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { eSharedObjectType, DexihTag, eSharedObjectTypeItems, DexihHubNamedEntity } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

class TagState {
    public tag: DexihTag
    public isChecked = false;
    public isIndeterminate = false;
}

@Component({
    selector: 'tags-update-button',
    templateUrl: './tags-update-button.component.html'
})
export class TagsUpdateButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public objectType: eSharedObjectType;
    @Input() public objects: DexihHubNamedEntity[];

    public hubCache: HubCache;
    public tags: TagState[];
    public objectTypeName: string;

    private _hubCacheSubscription: Subscription;

    private cancelToken: CancelToken = new CancelToken();

    constructor(
        private hubService: HubService) { }

    ngOnInit() {
        this.objectTypeName = eSharedObjectTypeItems.find(c => c.key === this.objectType)?.name;

        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache.isLoaded) {
                this.hubCache = cache;
                this.updateTags();
            }
        });
    }

    ngOnChanges(): void {
        if (this.hubCache?.isLoaded) {
            this.updateTags();
        }
    }

    updateTags() {
        let objectTags = this.hubCache.hub.dexihTagObjects.filter(c =>
            c.objectType === this.objectType &&
            this.objects.findIndex(d => d.key === c.objectKey) >= 0);

        let dexihTags = this.hubCache.hub.dexihTags;

        this.tags = new Array(dexihTags.length);
        for (let i = 0; i < this.tags.length; i++) {
            let tag = dexihTags[i];
            this.tags[i] = new TagState();
            this.tags[i].tag = tag;
            let matchingTags = objectTags.filter(c => c.tagKey === tag.key);
            if (matchingTags.length > 0 && matchingTags.length === this.objects.length) {
                this.tags[i].isChecked = true;
                this.tags[i].isIndeterminate = false;
            } else if (matchingTags.length > 0) {
                this.tags[i].isChecked = false;
                this.tags[i].isIndeterminate = true;
            } else {
                this.tags[i].isChecked = false;
                this.tags[i].isIndeterminate = false;
            }
        }
    }

    delete() {
        this.hubService.deleteTagObjects(this.objects.map(c => {
            return {objectType: this.objectType, objectKey: c.key};
        }));
    }

    tagChange(tag: TagState) {
        this.hubService.saveTagObjects(tag.tag.key, tag.isChecked,
            this.objects.map(c => {
                return {objectType: this.objectType, objectKey: c.key};
            }));
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }
}
