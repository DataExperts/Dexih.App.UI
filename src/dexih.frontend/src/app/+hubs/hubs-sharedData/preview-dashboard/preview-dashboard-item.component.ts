import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DexihDashboardItem, eDataObjectType } from '../../../shared/shared.models';
import { DataCache } from '../../../+hub/hub.models';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'preview-dashboard-item',
    templateUrl: 'preview-dashboard-item.component.html'
})

export class PreviewDashboardItemComponent implements OnInit {
    @Input() hubKey: number;
    @Input() item: DexihDashboardItem;
    @Input() refreshData: EventEmitter<string>;
    @Output() onMaximize = new EventEmitter<DexihDashboardItem>();
    @Input() isMaximized = false;

    eDataObjectType = eDataObjectType;
    constructor() { }

    ngOnInit() {
    }


    // public refresh() {
    //     let data = <DataCache> this.item['data'];
    //     let view = this.hubCache.hub.dexihViews.find(c => c.key === this.item.controls.viewKey.value);
    //     view = Object.assign({}, view);
    //     view.parameters = this.item.controls.parameters.value;
    //     if (view) {
    //         let preview = this.hubService.previewView(view, view.inputValues,
    //                 this.formsService.currentForm.controls.parameters.value, this.cancelToken);
    //         data.refresh(preview);
    //     }
    // }

    public maximise() {
        this.onMaximize.emit(this.item);
    }
}
