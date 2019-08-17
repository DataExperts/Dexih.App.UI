import { Component, OnInit, Input, OnDestroy, Output, EventEmitter,
    ViewChild, ViewChildren, QueryList, AfterContentInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { HubService } from '../../..';
import { Subscription, combineLatest } from 'rxjs';
import { HubCache, DexihView, DexihInputParameter, Parameter } from '../../../hub.models';
import { PreviewViewComponent } from '../../../widgets/preview-view/preview-view.component';
import { FormatWidth } from '@angular/common';
import { HubFormsService } from '../../../hub.forms.service';

@Component({
    selector: 'dashboard-item',
    templateUrl: 'dashboard-item.component.html',
    styleUrls: ['./dashboard-item.component.scss']
})

export class DashboardItemComponent implements OnInit, OnChanges, OnDestroy {
    @Input() item: FormGroup;
    @Input() showEdit = true;
    @Input() showPreview = false;
    @Input() resizeEvent: EventEmitter<any[]>;
    @Input() refreshData: EventEmitter<string>;

    @Output() onRemove = new EventEmitter();

    @ViewChildren('view') public viewControls: QueryList<PreviewViewComponent>;
    @ViewChild('widget', {static: true}) public window: ElementRef;

    private _resizeSubscription: Subscription;
    private _refreshDataSubscription: Subscription;

    private _subscription: Subscription;
    private _viewKeySubscription: Subscription;

    public resizeEvent2 = new EventEmitter<any[]>();

    hubCache: HubCache;
    views: DexihView[];

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
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }

        this._resizeSubscription = this.resizeEvent.subscribe((view: any[]) => {
            if (view && view.length > 1) {
                // subtract 40 to account for header.
                this.resizeEvent2.emit([view[0], view[1] - 40]);
            }
        });

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._resizeSubscription) { this._resizeSubscription.unsubscribe(); }
        if (this._viewKeySubscription) { this._viewKeySubscription.unsubscribe(); }
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

                        // reset parameters.
                        let formParameters = <FormArray> this.item.controls.parameters;
                        let currentParameters = <DexihInputParameter[]> formParameters.value;

                        formParameters.clear();

                        view.parameters.forEach(parameter => {
                            let currentParameter = currentParameters.find( c => c.name === parameter.name);
                            let newParameter = new DexihInputParameter();
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
        if (this.viewControls.length > 0) {
            this.viewControls.first.refresh();
        }
    }

    removeItem($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.onRemove.emit();
    }

    public maximise() {

    }
}
