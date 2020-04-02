import { FormGroup, FormBuilder } from '@angular/forms';
import { DexihMessageComponent } from '../dexihMessage';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DexihHubAuth, CancelToken } from '../../../+auth/auth.models';
import { ActivatedRoute, Router } from '@angular/router';
import { eDownloadFormat, SharedData, eSharedObjectType, eDataObjectType } from '../../shared.models';

@Component({
    selector: 'sharedData',
    templateUrl: './sharedData.component.html',
})
export class SharedDataComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    public _subscription: Subscription;
    public _searchSubscription: Subscription;
    public searchForm: FormGroup;
    private cancelToken = new CancelToken();

    eDownloadFormat = eDownloadFormat;

    hubs: DexihHubAuth[];
    hubKeys: number[];

    columns = [
        { name: 'logicalName', title: 'Details', header: 'hubName', footer: 'description', format: 'Md' },
        { name: 'objectType', title: 'Type', format: 'Enum', enum: eDataObjectType},
        { name: 'updateDate', title: 'Last Updated', format: 'DateTime' },
    ];

    public dataIndex: SharedData[] = null;

    constructor(private authService: AuthService,
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

                if (this.hubs) {
                    this.hubKeys = this.hubs.map(c => c.hubKey);
                }

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
        this.authService.getSharedDataIndex(this.searchForm.value.searchString, hubKeys, 50, true).then(result => {

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
        this.authService.downloadData(sharedItems, zipFiles, downloadFormat, this.cancelToken).then(() => {
            this.dexihMessage.addSuccessMessage('The download task has started.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }

    edit(item: SharedData) {
        switch (item.objectType) {
            case eDataObjectType.Datalink:
                this.router.navigate(['hub', item.hubKey, 'datalinks', 'datalink-edit', 'edit', item.objectKey]);
                break;
            case eDataObjectType.Table:
                this.router.navigate(['hub', item.hubKey, 'tables', 'table-edit', item.objectKey]);
                break;
            case eDataObjectType.View:
                this.router.navigate(['hub', item.hubKey, 'views', 'view-edit', item.objectKey]);
                break;
            case eDataObjectType.Dashboard:
                this.router.navigate(['hub', item.hubKey, 'dashboards', 'dashboard-edit', item.objectKey]);
                break;
            }
    }
}
