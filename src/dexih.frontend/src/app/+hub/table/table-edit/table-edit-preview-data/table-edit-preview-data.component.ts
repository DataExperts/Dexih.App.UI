import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HubFormsService } from '../../../hub.forms.service';
import { DexihTable } from '../../../../shared/shared.models';

@Component({

    selector: 'table-edit-preview-data',
    templateUrl: './table-edit-preview-data.component.html'
})
export class TableEditPreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public table: DexihTable;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    constructor(
        public formsService: HubFormsService,
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.hubService.getHubCacheObservable(),
                this.formsService.getCurrentFormObservable(),
            ).subscribe(result => {
                let data = result[0];
                let tableForm = result[2];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (tableForm) {
                    this.table = tableForm.value;
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Edit Preview');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }
}
