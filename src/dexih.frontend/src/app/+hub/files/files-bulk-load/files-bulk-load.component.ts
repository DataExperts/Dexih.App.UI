import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileHandler } from '../../../+auth/auth.models';
import { Subscription, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { HubCache, FileProperties, DexihConnection, eCacheStatus, Table, DexihTable } from '../../hub.models';
import { RemoteLibraries, eConnectionCategory } from '../../hub.remote.models';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../..';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'files-bulk-load',
    templateUrl: 'files-bulk-load.component.html'
})

export class FilesBulkLoadComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _flatFilesSubscription: Subscription;

    public entityType = 'Table';

    public canEdit = false;
    public connectionKey: number;
    public connection: DexihConnection;

    public hubCache: HubCache;
    private remoteLibraries: RemoteLibraries;

    public automaticUpload = true;

    public uploadedFiles: FileHandler[] = [];

    private reference: string = null;
    public tables: DexihTable[] = []


    pageTitle = 'Manage Files';
    showPage = false;
    showPageMessage = 'Loading...';

    tableColumns = [
        { name: 'logicalName', title: 'Logical Name', format: 'Md', footer: 'description' },
        { name: 'name', title: 'Table Name'  },
    ];

    uploadColumns = [
        { name: 'file.name', title: 'File Name', format: '' },
        { name: 'file.size', title: 'Size', format: '' },
    ];

    public fileConnections: DexihConnection[];

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                let queryParams = result[0];
                this.hubCache = result[1];
                this.remoteLibraries = result[2];

                if (this.hubCache.status !== eCacheStatus.Loaded) { return; }

                this.fileConnections = this.hubCache.hub.dexihConnections
                    .filter(c => {
                        const ref = this.remoteLibraries.GetConnectionReference(c);
                        if (ref) {
                            return ref.connectionCategory === eConnectionCategory.File;
                        } else {
                            return false;
                        }
                    });

                this.connectionKey = +queryParams['connectionKey'];
                if (!this.connectionKey) {
                    if (this.fileConnections.length > 0) {
                        this.connectionKey = this.fileConnections[0].key;
                    }
                }

                this.connection = this.hubCache.getConnection(this.connectionKey);

                if (!this.connection && this.connectionKey) {
                    this.hubService.addHubErrorMessage(`The connection with the key ${this.connectionKey} could not be found.`);
                } else if (this.connection) {
                    this.pageTitle = 'Load files for ' + this.connection.name;
                    this.showPage = true;
                }
            });

            this._flatFilesSubscription = this.hubService.getFlatFilesObservable().subscribe(flatFileReady => {
                if (flatFileReady.reference === this.reference) {
                    this.tables = flatFileReady.tables;
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Files Manage');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._flatFilesSubscription) { this._flatFilesSubscription.unsubscribe(); }
    }

    public close() {
        this.authService.navigateUp();
    }

    public uploadFile(event) {
        let files = event.srcElement.files;
        this.doUpload(files);
        return false;
    }

    public filesDrop(files: any) {
        this.doUpload(files);
    }

    public doUpload(files) {
        Array.prototype.forEach.call(files, file => {
            this.hubService.bulkUploadFiles(this.connection, file.name).then(result => {
                let url = result.url;
                this.reference = result.reference;

                let fileHandler = new FileHandler(file, url);
                if (this.automaticUpload) {
                    this.authService.upload(fileHandler).then(status => {
                        this.hubService.addHubMessage(status);
                    }).catch(reason => {
                        this.hubService.addHubMessage(reason);
                    });
                }
                this.uploadedFiles.push(fileHandler);
            }).catch(reason => {
                this.hubService.addHubMessage(reason);
            });
        });
    }

    public saveTables(items: DexihTable[]) {
        items.forEach(async table => {
            await this.hubService.saveTable(table);
        });
    }
}
