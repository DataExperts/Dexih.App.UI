import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { eDataObjectType, DexihTable } from '../../../../shared/shared.models';

@Component({

    selector: 'datalink-preview-table',
    templateUrl: './preview-table.component.html'
})
export class PreviewTableComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public datalinkForm: FormGroup;
    public datalinkTransformForm: FormGroup;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public eDataObjectType = eDataObjectType;

    public error: string;

    tableKey: number;
    datalinkKey: number;
    
    name: string;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                // load the cache first
                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.
                    if (params['tableKey']) {
                        this.tableKey = +params['tableKey'];
                        let table = this.hubCache.getTable(this.tableKey);
                        if (table) {
                            this.name = table.name;
                        }
                    } else {
                        this.datalinkKey = +params['datalinkKey'];
                        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key == this.datalinkKey);
                        if (datalink) {
                            this.name = datalink.name;
                        }
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Preview Table Data');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

}
