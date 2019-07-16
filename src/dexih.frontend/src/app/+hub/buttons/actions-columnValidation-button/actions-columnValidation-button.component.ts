import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { DexihColumnValidation } from '../../hub.models';
import { HubService } from '../../hub.service';


@Component({
    selector: 'actions-columnValidation-button',
    templateUrl: './actions-columnValidation-button.component.html'
})

export class ActionsColumnValidationButtonComponent implements OnInit, OnDestroy {
    @Input() public columnValidation: DexihColumnValidation;
    @Input() public pullRight = false;

    private _hubCacheSubscription: Subscription;

    columns = [];

    constructor(
        private authService: AuthService,
        private hubService: HubService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {

            if (cache.isLoaded()) {
                // search any columns for an occurrence of the columnValidation.
                cache.hub.dexihTables.forEach(tab => {
                    let con = cache.hub.dexihConnections.find(c => c.key === tab.connectionKey);
                    tab.dexihTableColumns.forEach(col => {
                        if (col.columnValidationKey === this.columnValidation.key) {
                            this.columns.push({
                                name : `${col.name} (${con.name}.${tab.name})`,
                                tableKey: tab.key,
                                columnKey: col.key
                            });
                        }
                    });
                });
            }
        });

    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
     }

    navigateToColumn(col: any) {
        this.router.navigate(['table-edit', col.tableKey, 'column', col.key], { relativeTo: this.route.parent.parent });
    }

}
