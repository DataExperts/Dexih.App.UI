import { Component, OnInit, Input, OnDestroy, Output, EventEmitter,
    ViewChild, ViewChildren, QueryList, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { HubService } from '../../..';
import { Subscription, combineLatest } from 'rxjs';
import { HubCache, DexihInputParameter, DataCache } from '../../../hub.models';
import { PreviewViewComponent } from '../../../widgets/preview-view/preview-view.component';
import { HubFormsService } from '../../../hub.forms.service';
import { DexihWidgetComponent } from 'dexih-ngx-components';
import { CancelToken } from '../../../../+auth/auth.models';
import { DexihView, DexihDashboardItem, InputParameterBase, InputParameter } from '../../../../shared/shared.models';

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

    @ViewChildren('view') public viewControls: QueryList<PreviewViewComponent>;
    @ViewChild('widget', {static: true}) public widget: DexihWidgetComponent;

    private _subscription: Subscription;
    private _viewKeySubscription: Subscription;

    hubCache: HubCache;
    views: DexihView[];

    parentParameters: InputParameter[];

    private cancelToken = new CancelToken();

    constructor(private hubService: HubService, public formsService: HubFormsService) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.hubCache = result[0];

                if (this.hubCache && this.hubCache.isLoaded()) {
                    this.views = this.hubCache.hub.dexihViews;
                }

                this.parentParameters = this.formsService.currentForm.controls.parameters.value;
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }


    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._viewKeySubscription) { this._viewKeySubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    ngOnChanges(changes: SimpleChanges): void {
        let itemChange = changes['item'];
        if (itemChange) {
            let newItem = <FormGroup> itemChange.currentValue
            if (this._viewKeySubscription) { this._viewKeySubscription.unsubscribe(); }
            this._viewKeySubscription = newItem.controls.viewKey.valueChanges.subscribe(viewKey => {
                if (viewKey) {
                    let view = this.hubCache.hub.dexihViews.find(c => c.key === viewKey);
                    if (view) {
                        newItem.controls.name.setValue(view.name);
                        newItem.controls.runTime.value.data = new DataCache();

                        // reset parameters.
                        let formParameters = <FormArray> this.item.controls.parameters;
                        let currentParameters = <DexihInputParameter[]> formParameters.value;

                        formParameters.clear();

                        view.parameters.forEach(parameter => {
                            let currentParameter = currentParameters.find( c => c.name === parameter.name);
                            let newParameter = new InputParameterBase();
                            if (currentParameter) {
                                newParameter.name = currentParameter.name;
                                newParameter.value = currentParameter.value;
                            } else {
                                newParameter.name = parameter.name;
                                newParameter.value = parameter.value;
                            }
                            let newFormParameter = this.formsService.parameter(newParameter);
                            formParameters.push(newFormParameter);

                        });
                        
                    }
                }
            });
        }
    }

    public refresh() {
        // let data = <DataCache> this.item.controls.runTime.value.data;
        // let view = this.hubCache.hub.dexihViews.find(c => c.key === this.item.controls.viewKey.value);
        // view = Object.assign({}, view);
        // view.parameters = this.item.controls.parameters.value;
        // if (view) {
        //     let preview = this.hubService.previewView(view, view.inputValues,
        //             this.formsService.currentForm.controls.parameters.value, this.cancelToken);
        //     data.refresh(preview);
        // }

        let preview = this.hubService.previewViewKey(this.item.controls.viewKey.value, null,
        this.formsService.currentForm.controls.parameters.value, this.cancelToken);
        let data = <DataCache> this.item.controls.runTime.value.data;
        data.refresh(preview);
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
