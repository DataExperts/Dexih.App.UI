import { Component, OnInit, Input, OnDestroy, Output, EventEmitter,
    ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { HubService } from '../../..';
import { Subscription, combineLatest, Subject } from 'rxjs';
import { HubCache, DexihInputParameter, DataCache, PreviewResults } from '../../../hub.models';
import { HubFormsService } from '../../../hub.forms.service';
import { DexihWidgetComponent } from 'dexih-ngx-components';
import { CancelToken } from '../../../../+auth/auth.models';
import { DexihView, InputParameterBase, InputParameter, eDataObjectType, eViewType, DexihActiveAgent } from '../../../../shared/shared.models';
import { AuthService } from '../../../../+auth/auth.service';

@Component({
    selector: 'dashboard-item',
    templateUrl: 'dashboard-item.component.html',
    styleUrls: ['./dashboard-item.component.scss']
})

export class DashboardItemComponent implements OnInit, OnChanges, OnDestroy {
    @Input() item: FormGroup;
    @Input() showEdit = true;
    @Input() showPreview = false;
    @Input() refreshData: EventEmitter<string>;
    @Input() isMaximized = false;

    @Output() onRemove = new EventEmitter();
    @Output() onMaximize = new EventEmitter<FormGroup>();

    @ViewChild('widget', {static: true}) public widget: DexihWidgetComponent;

    private _subscription: Subscription;
    private _viewKeySubscription: Subscription;
    private _refreshDataSubscription: Subscription;

    hubCache: HubCache;
    remoteAgent: DexihActiveAgent;

    eViewType = eViewType;

    views: DexihView[];
    view: DexihView;
    parentParameters: InputParameter[];
    parameters: DexihInputParameter[];

    private firstLoad = true;
    private dialogOpen = false;

    data: DataCache;
    dataResult: PreviewResults;
    public dataRows = [];

    private refreshDataSubject: Subject<void> = new Subject<void>();

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private formsService: HubFormsService) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                this.remoteAgent = result[1];
                this.parentParameters = this.formsService.currentForm.controls.parameters.value;

                if (this.hubService.isHubCacheLoaded) {
                    this.views = this.hubCache.hub.dexihViews;
                    if (this.item?.controls.viewKey) {
                        this.view = this.hubCache.hub.dexihViews.find(c => c.key === this.item.controls.viewKey.value);

                        this.data = <DataCache> this.item.controls.runTime.value.data;

                        if (this.data) {
                            this._refreshDataSubscription = this.data.data.subscribe(dataResult => {
                                if (!dataResult) {
                                    return;
                                }

                                this.dataResult = dataResult;

                                if (!dataResult.viewConfig.animateConfig) {
                                    this.dataRows = this.dataResult.data;
                                }

                                if (dataResult.status) {
                                    this.hubService.addHubMessage(dataResult.status, false, this.view.name);
                                }
                            });

                        } else if (this.remoteAgent) {
                            if (!this.firstLoad) {
                                if (!this.dialogOpen) {
                                    this.dialogOpen = true;
                                    this.authService.confirmDialog('Remote Agent Available',
                                        'A remote agent is available, would you like to refresh the data?').then(confirm => {
                                            if (confirm) {
                                                this.refresh();
                                            }
                                            this.dialogOpen = false;
                                        });
                                }
                            } else {
                                this.refresh();
                            }

                            this.firstLoad = false;
                        }
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._viewKeySubscription) { this._viewKeySubscription.unsubscribe(); }
        if (this._refreshDataSubscription) { this._refreshDataSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    ngOnChanges(changes: SimpleChanges): void {
        let itemChange = changes['item'];
        if (itemChange) {
            let newItem = <FormGroup> itemChange.currentValue;

            if (this.views && newItem.value) {
                this.view = this.hubCache.hub.dexihViews.find(c => c.key === newItem.value);
            }
            if (this._viewKeySubscription) { this._viewKeySubscription.unsubscribe(); }
            this._viewKeySubscription = newItem.controls.viewKey.valueChanges.subscribe(viewKey => {
                this.formsService.updateDashboardItemView(newItem);
            });
        }
    }

    // public updateView(viewKey) {
    //     if (this.views && viewKey) {
    //         this.view = this.hubCache.hub.dexihViews.find(c => c.key === viewKey);
    //         if (this.view) {
    //             this.item.controls.name.setValue(this.view.name);
    //             this.item.controls.runTime.value.data = new DataCache();

    //             // reset parameters.
    //             let formParameters = <FormArray> this.item.controls.parameters;
    //             let currentParameters = <DexihInputParameter[]> formParameters.value;

    //             formParameters.clear();

    //             let parameters = <InputParameterBase[]> this.view.parameters;
    //             if (this.view.sourceType === eDataObjectType.Datalink) {
    //                 let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === this.view.sourceDatalinkKey);
    //                 if (datalink && datalink.parameters) {
    //                     parameters = parameters.concat(datalink.parameters);
    //                 }
    //             }

    //             parameters.forEach(parameter => {
    //                 let currentParameter = currentParameters.find( c => c.name === parameter.name);
    //                 let newParameter = new InputParameterBase();
    //                 if (currentParameter) {
    //                     newParameter.name = currentParameter.name;
    //                     newParameter.value = currentParameter.value;
    //                 } else {
    //                     newParameter.name = parameter.name;
    //                     newParameter.value = parameter.value;
    //                 }
    //                 let newFormParameter = this.formsService.parameter(newParameter);
    //                 formParameters.push(newFormParameter);
    //             });
    //         }
    //     }
    // }

    public refresh() {
        let preview = this.hubService.previewViewKey(this.item.controls.viewKey.value, null,
        this.item.controls.parameters.value, this.cancelToken);
        this.data = <DataCache> this.item.controls.runTime.value.data;
        this.data.refresh(preview);
        preview.then(results => {
            this.refreshDataSubject.next();
            this.dataResult = results;
            if (!this.dataResult.viewConfig.animateConfig) {
                this.dataRows = this.dataResult.data;
            }
        }).catch(reason => {
            this.hubService.addHubMessage(reason);
        });
    }

    parameterChange() {
        this.refresh();
    }

    public toggleEdit() {
        this.showEdit = !this.showEdit;
    }

    removeItem($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.onRemove.emit();
    }

    public maximise() {
        this.onMaximize.emit(this.item);
    }
}
