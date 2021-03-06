import { Component, OnDestroy, OnInit, ViewChild, Input, AfterViewChecked, OnChanges, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihMessageComponent } from '../../../ui/dexihMessage/index';
import { eDataObjectType } from '../../../shared.models';
import { PreviewDataComponent} from '../preview-data/preview-data.component';

@Component({

    selector: 'preview',
    templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit, OnDestroy, AfterContentChecked {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;
    @ViewChild('PreviewData', { static: false }) public previewData: PreviewDataComponent;

    private _subscription: Subscription;


    objectKey: number;
    objectType: eDataObjectType;
    hubKey: number;
    embed = false; // removes frames from data.

    title = '';

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.route.queryParams
            ).subscribe(result => {
                let params = result[0];
                let queryParams = result[1];

                this.hubKey = +params['hubKey'];
                this.objectType = +params['objectType'];
                this.objectKey = +params['objectKey'];

                if (queryParams['embed'] === 'true') {
                    this.embed = true;
                }
            });
        } catch (e) {
            this.dexihMessage.addMessage(e);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    // use aftercontentchecked to stop
    ngAfterContentChecked(): void {
        if (this.previewData) {
            this.title = this.previewData.name;
        }
    }

    close() {
        this.authService.navigateUp();
    }

    edit() {
        switch (this.objectType) {
            case eDataObjectType.Datalink:
                this.router.navigate(['hub', this.hubKey, 'datalinks', 'datalink-edit', 'edit', this.objectKey]);
                break;
            case eDataObjectType.Table:
                this.router.navigate(['hub', this.hubKey, 'tables', 'table-edit', this.objectKey]);
                break;
            case eDataObjectType.View:
                this.router.navigate(['hub', this.hubKey, 'views', 'view-edit', this.objectKey]);
                break;
        }
    }

}
