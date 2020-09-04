import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription} from 'rxjs';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { DexihTag } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

class TagState {
    public tag: DexihTag
    public isChecked = false;
    
}

@Component({
    selector: 'tags-filter-button',
    templateUrl: './tags-filter-button.component.html'
})
export class TagsFilterButtonComponent implements OnInit, OnDestroy {
    @Input() public pullRight = false;
    @Output() public tags = new EventEmitter<DexihTag[]>();

    public hubCache: HubCache;
    public tagStates: TagState[];

    private _hubCacheSubscription: Subscription;

    private cancelToken: CancelToken = new CancelToken();

    constructor(
        private hubService: HubService) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache.isLoaded) {
                this.hubCache = cache;

                let dexihTags = this.hubCache.hub.dexihTags;

                this.tagStates = new Array(dexihTags.length);
                for (let i = 0; i < this.tagStates.length; i++) {
                    let tag = dexihTags[i];
                    this.tagStates[i] = new TagState();
                    this.tagStates[i].tag = tag;
                    this.tagStates[i].isChecked = false;
                }
            }
        });
    }


    clear() {
        this.tagStates.forEach(c => c.isChecked = false);
        this.tagChange();
    }

    tagChange() {
        let selectedTags = this.tagStates.filter(c => c.isChecked).map(c => c.tag);
        this.tags.emit(selectedTags);
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }
}
