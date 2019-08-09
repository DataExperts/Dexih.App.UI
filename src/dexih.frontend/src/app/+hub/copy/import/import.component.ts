import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { eImportAction, importActions, HubCache, Import, sharedObjectProperties, ImportAction } from '../../hub.models';
import { HubFormsService } from '../../hub.forms.service';

@Component({
    selector: 'import',
    templateUrl: './import.component.html',
    providers: [HubFormsService]
})

export class ImportComponent implements OnInit, OnDestroy {
    @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

    private _hubCacheSubscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    private hubCache: HubCache;

    public automaticUpload = true;

    pageTitle = 'Import Objects';
    showPage = false;
    showPageMessage = 'Loading...';
    messageId: string;

    importActions = importActions;

    public import: Import;
    public importOptions: ImportAction[];

    columns = [
        { name: 'objectType', title: 'Type', format: '' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'importAction', title: 'Action', format: '' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();


    constructor(
        private authService: AuthService,
        private hubService: HubService,
        public hubFormsService: HubFormsService
    ) { }

    ngOnInit() {
        this.importOptions = sharedObjectProperties.map(c => <ImportAction> { action: eImportAction.Replace, objectType: c.type })

        this._hubCacheChangeSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            this.hubCache = hubCache;
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    public doImport(file: File) {

        const form: FormData = new FormData();
        form.append('file', file, file.name);
        form.append('hubKey', this.hubCache.hub.hubKey.toString());

        for (let i = 0; i < this.importOptions.length; i++) {
            form.append(`ImportActions[${i}].Action`, this.importOptions[i].action.toString());
            form.append(`ImportActions[${i}].ObjectType`, this.importOptions[i].objectType.toString());
        }

        this.authService.postForm('/api/Hub/ImportPlan', form).then(result => {
            if (result.success) {
                this.import = result.value;
                this.refreshImport();
            } else {
                this.hubService.addHubMessage(result);
            }
        }).catch(reason => {
            if (reason) {
                this.hubService.addHubMessage(reason);
            } else {
                this.hubService.addHubErrorMessage('The import failed.')
            }
        });
    }

    public uploadFile(event) {
        let files = event.srcElement.files;
        this.doImport(files[0]);
        this.fileInput.nativeElement.value = '';
    }

    public filesDrop(files: any) {
        this.doImport(files[0]);
    }

    public refreshImport() {
        let objects = [];

        sharedObjectProperties.forEach(o => {
            let items = this.import[o.property];

            items.forEach(item => {
                objects.push({
                    objectType: o.property,
                    name: item.item.name,
                    importAction: item.importAction,
                    item: item
                })
            });
        });

        this._tableData.next(objects);
    }

    public importSelected(items) {
        let newImport = new Import();

        items.forEach(item => {
            if (!newImport[item.objectType]) {
                newImport[item.objectType] = [];
            }
            newImport[item.objectType].push(item.item);
        });

        this.hubService.importPackage(newImport).then(() => {
            this.authService.navigateUp();
        }).catch();
    }

    public importAll() {
        this.hubService.importPackage(this.import).then(() => {
            this.authService.navigateUp();
        }).catch();
    }

}
