import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { FormGroup } from '@angular/forms';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';

@Component({
    selector: 'dexih-table-column-edit',
    templateUrl: './table-column-edit.component.html',
})
export class TableColumnEditComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public tableForm: FormGroup;
    public columnKey: number;
    public detailedView = true;

    public pageTitle: string;
    public action: string;


    constructor(
        private authService: AuthService,
        private hubService: HubService,
        public formService: HubFormsService,
        private route: ActivatedRoute,
        private router: Router        ) {
    }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.formService.getCurrentFormObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.tableForm = result[3];

                this.pageTitle = data['pageTitle'];
                this.action = data['action'];

                this.columnKey = +params['columnKey'];
                this.detailedView = queryParams['detailed'] === 'false' ? false : true;
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Column Edit');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    isUpdated() {
        this.authService.navigateUp();
    }

    changeColumn(columnKey: number) {
        this.router.navigate(['column', columnKey], {relativeTo: this.route.parent});
    }

}
