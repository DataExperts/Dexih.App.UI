import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage/index';
import { HubsService} from '../../hubs.service';
import { CancelToken } from '../../../+auth/auth.models';
import { InputColumn, DexihColumnBase, SelectQuery, eDownloadFormat, SharedData, eDataObjectType, ChartConfig } from '../../../shared/shared.models';

@Component({

    selector: 'preview',
    templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    private _subscription: Subscription;


    objectKey: number;
    objectType: eDataObjectType;
    hubKey: number;


    constructor(
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
            ).subscribe(result => {
                let params = result[0];

                this.hubKey = +params['hubKey'];
                this.objectType = +params['objectType'];
                this.objectKey = +params['objectKey'];

            });
        } catch (e) {
            this.dexihMessage.addMessage(e);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

}
