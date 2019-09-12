import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { DexihFileFormat } from '../../../shared/shared.models';

@Component({
    selector: 'actions-fileFormat-button',
    templateUrl: './actions-fileFormat-button.component.html'
})

export class ActionsFileFormatButtonComponent implements OnInit, OnDestroy {
    @Input() public fileFormat: DexihFileFormat;
    @Input() public pullRight = false;

    private _hubCacheSubscription: Subscription;

        tables = [];

        constructor(
            private authService: AuthService,
            private hubService: HubService,
                    private router: Router,
                    private route: ActivatedRoute) { }

        ngOnInit() {
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
                if (!cache.isLoaded()) { return; }

                // search any columns for an occurrence of the columnValidation.
                    cache.hub.dexihTables.forEach(tab => {
                        let con = cache.hub.dexihConnections.find(c => c.key === tab.connectionKey);
                        if (tab.fileFormatKey === this.fileFormat.key) {
                            this.tables.push({
                                name : `${tab.name} (${con ? con.name : 'undefined'})`,
                                tableKey: tab.key,
                            });
                        }
                });
            });

        }

        ngOnDestroy() {
            if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
         }

        navigateToTable(col: any) {
            this.router.navigate(['table-edit', col.tableKey], { relativeTo: this.route.parent.parent });
        }

}
