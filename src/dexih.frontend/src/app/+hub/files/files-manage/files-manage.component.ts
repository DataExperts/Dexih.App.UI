import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { HubCache, FileProperties, eCacheStatus, ConnectionTables, updateStrategies } from '../../hub.models';
import { Message, FileHandler, eFileStatus, CancelToken } from '../../../+auth/auth.models';
import { DexihTable, eFlatFilePath, DexihConnection, eConnectionCategory, eFlatFilePathItems, eConnectionPurpose,
    ConnectionReference, RemoteLibraries, eUpdateStrategy, eUpdateStrategyItems } from '../../../shared/shared.models';


@Component({
    selector: 'files-manage',
    templateUrl: './files-manage.component.html'
})
export class FilesManageComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public entityType = 'Table';

    public canEdit = false;
    public tableKey: number;
    public table: DexihTable;
    public connectionReference: ConnectionReference;
    public updateStrategy: eUpdateStrategy = eUpdateStrategy.Reload;

    public updateStrategies = updateStrategies;

    public path = eFlatFilePath.None;
    public localPath: string;
    public eFlatFilePath = eFlatFilePath;
    public eFlatFilePathItems = eFlatFilePathItems.filter(c => c.key > 0);
    public eFileStatus = eFileStatus;

    public connectionTables: ConnectionTables[];

    public remoteLibraries: RemoteLibraries;

    public hubCache: HubCache;

    public automaticUpload = true;

    public uploadedFiles: FileHandler[] = [];
    public cancelToken: CancelToken = new CancelToken();

    pageTitle = 'Manage Files';
    showPage = false;
    showPageMessage = 'Loading...';

    columns = [
        { name: 'fileName', title: 'File Name', format: '' },
        { name: 'length', title: 'Size', format: '' },
        { name: 'lastModified', title: 'Last Modified', format: 'Calendar' },
    ];

    private _tableData = new BehaviorSubject<Array<FileProperties>>(null);
    tableData: Observable<Array<FileProperties>> = this._tableData.asObservable();

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
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(true),
                this.hubService.getRemoteLibrariesObservable(),
            ).subscribe(result => {
                let params = result[0];
                let queryParams = result[1];
                this.hubCache = result[2];
                this.remoteLibraries = result[3];

                // if (this.hubCache.status !== eCacheStatus.Loaded) { return; }

                // if the connection is a file connection or not a source connection
                this.fileConnections = this.hubCache.hub.dexihConnections
                    .filter(c => {
                        let ref = this.remoteLibraries.connections.find(con =>
                            c.connectionAssemblyName === con.connectionAssemblyName
                            && c.connectionClassName === con.connectionClassName);
                        if (ref) {
                            return (ref.connectionCategory === eConnectionCategory.File || c.purpose !== eConnectionPurpose.Source);
                        } else {
                            return false;
                        }
                    });

                let connectionTables = this.hubCache.getConnectionTables();

                this.connectionTables = connectionTables.filter(c => {
                    if (c.dexihTables.length > 0) {
                        return this.fileConnections.find(fc => c.key === fc.key) == null ? false : true;
                    }
                });

                let hasChanged = false;
                this.tableKey = +queryParams['tableKey'];
                if (!this.tableKey) {
                    if (this.connectionTables.length > 0 && this.connectionTables[0].dexihTables.length > 0) {
                        this.tableKey = this.connectionTables[0].dexihTables[0].key;
                        hasChanged = true;
                    }
                }

                this.path = +queryParams['path'];
                if (!this.path) {
                    this.path = eFlatFilePath.Incoming;
                    hasChanged = true;
                }

                if (hasChanged) {
                    this.router.navigate(
                        [],
                        {
                          relativeTo: this.route,
                          queryParams: { tableKey: this.tableKey, path: this.path},
                          queryParamsHandling: 'merge', // remove to replace all query params by provided
                        });
                        return;
                }

                this.table = this.hubCache.getTable(this.tableKey);
                let connection = this.hubCache.getConnection(this.table.connectionKey);
                this.connectionReference = this.remoteLibraries.connections.find(con =>
                    connection.connectionAssemblyName === con.connectionAssemblyName
                    && connection.connectionClassName === con.connectionClassName);

                if (!this.table && this.tableKey) {
                    this.hubService.addHubErrorMessage(`The table with the key ${this.tableKey} could not be found.`);
                } else if (this.table) {
                    this.pageTitle = 'Manage files for ' + this.table.name;
                    this.showPage = true;
                    this.refreshFiles();
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Files Manage');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    updateTable(tableKey: number) {
        this.router.navigate(
            [],
            {
              relativeTo: this.route,
              queryParams: { tableKey: tableKey, path: 'incoming'},
              queryParamsHandling: 'merge', // remove to replace all query params by provided
            });
    }

    refreshFiles() {
        if (this.connectionReference.allowsFlatFiles) {
            this.hubService.getFileList(this.table, this.path, this.cancelToken).then(result => {
                this._tableData.next(result);
            }).catch(reason => {
                this._tableData.next([]);
            });
        }
    }

    public uploadSelected(items: Array<FileHandler>) {
        items.forEach(item => {
            this.authService.upload(item).then(status => {
                if (status.success) {
                    this.hubService.addHubSuccessMessage(`File ${item.file.name} uploaded successfully.`)
                    this.refreshFiles();
                } else {
                    this.hubService.addHubMessage(status);
                }
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

    public deleteSelected(items: Array<FileProperties>) {
        let files = items.map(c => c.fileName);
        this.hubService.deleteFiles(this.table, this.path, files, this.cancelToken).then(c => {
            if (c) {
                this.refreshFiles();
            }
        }).catch();
    }

    public moveSelected(items: Array<FileProperties>, toPath: eFlatFilePath) {
        let files = items.map(c => c.fileName);
        this.hubService.moveFiles(this.table, this.path, toPath, files, this.cancelToken).then(c => {
            if (c) {
                this.refreshFiles();
            }
        }).catch(reason => {
            this.hubService.addHubMessage(status);
        });
}

    public downloadSelected(items: Array<FileProperties>) {
        let files = items.map(c => c.fileName);
        this.hubService.downloadFiles(this.table, this.path, files, this.cancelToken).then(c => {
            if (c) {
                this.refreshFiles();
            }
        }).catch();
    }

    public preview(item: FileProperties) {
        this.router.navigate(['hub', this.hubCache.hub.hubKey, 'summary', 'files', 'manage', this.tableKey, this.path, item.fileName]);
    }

    public close() {
        this.authService.navigateUp();
    }

    public uploadFile(event) {
        let files = event.srcElement.files;
        this.doUpload(files);
        return false;
    }

    public doUpload(files) {
        Array.prototype.forEach.call(files, file => {
            this.hubService.uploadFile(this.table, this.path, this.updateStrategy, file.name, this.cancelToken).then(url => {
                let fileHandler = new FileHandler(file, url);
                if (this.automaticUpload) {
                    this.authService.upload(fileHandler).then(status => {
                        if (status.success) {
                            this.hubService.addHubSuccessMessage(`File ${file.name} uploaded successfully.`)
                            this.refreshFiles();
                        } else {
                            this.hubService.addHubMessage(status);
                        }
                    }).catch(reason => {
                        this.hubService.addHubMessage(reason);
                    });

                }
                this.uploadedFiles.push(fileHandler);
                this.uploadedFiles = [...this.uploadedFiles];
            }).catch(reason => {
                this.hubService.addHubMessage(reason);
            });
        });
    }

    public filesDrop(files: any) {
        this.doUpload(files);
    }
}
