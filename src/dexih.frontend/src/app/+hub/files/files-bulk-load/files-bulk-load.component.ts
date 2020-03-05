import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FileHandler, eFileStatus, CancelToken } from '../../../+auth/auth.models';
import { Subscription, combineLatest } from 'rxjs';
import { HubCache, eCacheStatus, formatTypes } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../..';
import { ActivatedRoute, Router } from '@angular/router';
import { HubFormsService } from '../../hub.forms.service';
import { DexihConnection, eTypeCode, DexihTable, eConnectionCategory } from '../../../shared/shared.models';

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

    public formatTypes = formatTypes;
    public eTypeCode = eTypeCode;
    public formatType = eTypeCode.Text;
    public fileFormatKey: number;

    public eFileStatus = eFileStatus;

    public hubCache: HubCache;

    public automaticUpload = true;

    public uploadedFiles: FileHandler[] = [];

    private reference: string = null;
    public tables: DexihTable[] = []

    public currentTable: DexihTable = null;

    private cancelToken = new CancelToken();

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
        private router: Router,
        public formsService: HubFormsService) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.queryParams,
                this.hubService.getHubCacheObservable(true),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                let queryParams = result[0];
                this.hubCache = result[1];
                let remoteLibraries = result[2];

                this.fileConnections = this.hubCache.hub.dexihConnections
                    .filter(c => {
                        let ref = remoteLibraries.connections.find(con =>
                            c.connectionAssemblyName === con.connectionAssemblyName
                            && c.connectionClassName === con.connectionClassName);

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
        this.cancelToken.cancel();
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
            this.hubService.bulkUploadFiles(this.connectionKey, this.fileFormatKey, this.formatType, file.name,
                this.cancelToken).then(result => {
                let url = result.url;
                this.reference = result.reference;

                let fileHandler = new FileHandler(file, url);
                this.uploadedFiles = this.uploadedFiles.concat(fileHandler);
                // this.uploadedFiles.push(fileHandler);

                if (this.automaticUpload) {
                    this.authService.upload(fileHandler).then(status => {
                        if (status.success) {
                            this.hubService.addHubSuccessMessage(file.name + ' uploaded.');
                        } else {
                            this.hubService.addHubMessage(status);
                        }
                    }).catch(reason => {
                        this.hubService.addHubMessage(reason);
                    });
                }
            }).catch(reason => {
                this.hubService.addHubMessage(reason);
            });
        });
    }

    public editTable(table: DexihTable) {
        this.currentTable = table;
        this.formsService.table(table);
        this.router.navigate(['table-edit'], { relativeTo: this.route });
    }

    public applyChanges() {
        if (this.formsService.hasChanged) {
            let table = this.formsService.currentForm.value;
            Object.assign(this.currentTable, table);
        }
        this.currentTable = null;
        this.authService.navigateUp();
    }

    public cancel() {
        this.currentTable = null;
        this.authService.navigateUp();
    }

    public async saveTables(items: DexihTable[]): Promise<number[]> {
        let newTables = Object.assign([], this.tables);
        let keys: number[] = [];
        for (let i = 0; i < items.length; i++ ) {
            let table = items[i];
            let savedTable = await this.hubService.saveTables([table]);

            keys.push(savedTable[0].key);

            // after table is saved, remove from unsaved list.
            let index = this.tables.findIndex(t => table.key === t.key);
            newTables.splice(index, 1);
        };

        this.tables = newTables;
        return keys;
    }

    public async createDatalinks(items: DexihTable[]) {
        let keys = await this.saveTables(items);
        let tableKeys = keys.join('|');
        this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'tables', 'datalink-new', tableKeys, 0],
            { relativeTo: this.route.root });
    }

    public discardTables(items: DexihTable[]) {
        let newTables = Object.assign([], this.tables);
        for (let i = 0; i < items.length; i++ ) {
            let table = items[i];
            let index = this.tables.findIndex(t => table.key === t.key);
            newTables.splice(index, 1);
        };
        this.tables = newTables;
    }


    public uploadSelected(items: Array<FileHandler>) {
        items.forEach(item => {
            this.authService.upload(item).then(status => {
                this.hubService.addHubMessage(status);
            }).catch(reason => {
                this.hubService.addHubMessage(reason);
            });
        });
    }

    public removeSelected(items: Array<FileHandler>) {
        items.forEach(item => {
            let index = this.uploadedFiles.findIndex(c => c.id === item.id);
            if (index >= 0) {
                this.uploadedFiles.splice(index, 1);
            }
        });
    }

    public cancelSelected(items: Array<FileHandler>) {
        items.forEach(item => item.cancel());
    }

    public canDeactivate(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (this.tables.length > 0) {
                this.authService.confirmDialog('Unsaved tables!',
              'Table(s) have not been saved, this action will discard unsaved tables.  Do you want to discard the changes and exit?')
              .then((confirm) => {
                  resolve(confirm);
                }).catch(() => {
                  resolve(false);
                });
          } else {
            resolve(true);
          }
        });
      }

      // @HostListener allows is to guard against browser refresh, close, etc.
      @HostListener('window:beforeunload', ['$event'])
      unloadNotification($event: any) {
        if (this.tables.length > 0) {
          $event.returnValue =
            'Table(s) have not been saved, this action will discard unsaved tables.  Do you want to discard the changes and exit?';
        }
      }
}
