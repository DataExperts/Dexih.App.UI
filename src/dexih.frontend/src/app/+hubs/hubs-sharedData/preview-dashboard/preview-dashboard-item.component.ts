import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DexihDashboardItem, eDataObjectType, InputParameter, InputParameterBase } from '../../../shared/shared.models';

@Component({
    selector: 'preview-dashboard-item',
    templateUrl: 'preview-dashboard-item.component.html'
})

export class PreviewDashboardItemComponent implements OnInit {
    @Input() hubKey: number;
    @Input() item: DexihDashboardItem;
    @Input() refreshData: EventEmitter<string>;
    @Input() isMaximized = false;
    @Input() parentParameters: InputParameterBase[];
    @Output() onMaximize = new EventEmitter<boolean>();

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

    public maximize($event) {
        this.onMaximize.emit($event);
    }
}
