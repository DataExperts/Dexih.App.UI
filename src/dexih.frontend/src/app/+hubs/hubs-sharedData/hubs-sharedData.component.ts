import { FormGroup, FormBuilder } from '@angular/forms';
import { DexihMessageComponent } from '../../shared/ui/dexihMessage';
import { SharedData } from '../../+hub/hub.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Subscription, combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DexihHubAuth } from '../../+auth/auth.models';
import { ActivatedRoute, Router } from '@angular/router';
import { eDownloadFormat } from '../../+hub/hub.query.models';
import { HubsService } from '../hubs.service';

@Component({
    selector: 'hubs-sharedData',
    templateUrl: './hubs-sharedData.component.html',
})
export class HubsSharedDataComponent implements OnInit {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    public _subscription: Subscription;
    public _searchSubscription: Subscription;
    public searchForm: FormGroup;

    eDownloadFormat = eDownloadFormat;

    hubs: DexihHubAuth[];

    columns = [
        { name: 'logicalName', title: 'Details', header: 'hubName', footer: 'description', format: 'Md' },
        { name: 'objectType', title: 'Type'},
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

    updateSearch() {
        let hubKeys = <number[]>this.searchForm.value.hubKeys;
        this.hubsService.getSharedDataIndex(this.searchForm.value.searchString, hubKeys, 50, true).then(result => {

            this.dataIndex = result;

        }).catch(reason => this.dexihMessage.addMessage(reason));
    }

    previewData(item: SharedData) {
        this.router.navigate(['preview', item.hubKey, item.objectType, item.objectKey], { relativeTo: this.route.parent });
    }

    downloadData(sharedItems: Array<SharedData>, zipFiles: boolean, downloadFormat: eDownloadFormat) {
        this.hubsService.downloadData(sharedItems, zipFiles, downloadFormat).then(() => {
            this.dexihMessage.addSuccessMessage('The download task has started.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }

}

