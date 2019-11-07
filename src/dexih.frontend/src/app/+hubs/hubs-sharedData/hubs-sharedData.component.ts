import { FormGroup, FormBuilder } from '@angular/forms';
import { DexihMessageComponent } from '../../shared/ui/dexihMessage';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Subscription, combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DexihHubAuth, CancelToken } from '../../+auth/auth.models';
import { ActivatedRoute, Router } from '@angular/router';
import { HubsService } from '../hubs.service';
import { eDownloadFormat, SharedData, eSharedObjectType, eDataObjectType } from '../../shared/shared.models';

@Component({
    selector: 'hubs-sharedData',
    templateUrl: './hubs-sharedData.component.html',
})
export class HubsSharedDataComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    public _subscription: Subscription;
    public _searchSubscription: Subscription;
    public searchForm: FormGroup;
    private cancelToken = new CancelToken();

    eDownloadFormat = eDownloadFormat;

    hubs: DexihHubAuth[];

    columns = [
        { name: 'logicalName', title: 'Details', header: 'hubName', footer: 'description', format: 'Md' },
        { name: 'objectType', title: 'Type', format: 'Enum', enum: eDataObjectType},
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    ];

    public dataIndex: SharedData[] = null;

    constructor(private authService: AuthService,
        private hubsService: HubsService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.authService.getHubsObservable()
            ).subscribe(result => {
                let params = result[0];
                this.hubs = result[1];

                this.searchForm = this.fb.group({
                    'searchString': ['', [
                    ]],
                    'hubKeys': [[], [
                    ]],
                });

                this.updateSearch();

                if (this._searchSubscription) { this._searchSubscription.unsubscribe(); }
                this._searchSubscription = this.searchForm.valueChanges
                    .pipe(debounceTime(500))
                    .subscribe(() => {
                        this.updateSearch();
                    });
            });
        } catch (e) {
            this.dexihMessage.addErrorMessage(e.message);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    updateSearch() {
        let hubKeys = <number[]>this.searchForm.value.hubKeys;
        this.hubsService.getSharedDataIndex(this.searchForm.value.searchString, hubKeys, 50, true).then(result => {

            this.dataIndex = result;

        }).catch(reason => this.dexihMessage.addMessage(reason));
    }

    previewData(item: SharedData) {
        if (item.objectType === eDataObjectType.Dashboard) {
            this.router.navigate(['previewDashboard', item.hubKey, item.objectKey], { relativeTo: this.route.parent });
        } else {
            this.router.navigate(['preview', item.hubKey, item.objectType, item.objectKey], { relativeTo: this.route.parent });
        }
    }

    downloadData(sharedItems: Array<SharedData>, zipFiles: boolean, downloadFormat: eDownloadFormat) {
        this.hubsService.downloadData(sharedItems, zipFiles, downloadFormat, this.cancelToken).then(() => {
            this.dexihMessage.addSuccessMessage('The download task has started.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
}

