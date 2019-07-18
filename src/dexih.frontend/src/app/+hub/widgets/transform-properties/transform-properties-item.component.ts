import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TransformProperties } from '../../hub.models';
import { transformTypes } from '../../hub.remote.models';

@Component({
    selector: 'transform-properties-item',
    templateUrl: 'transform-properties-item.component.html'
})

export class TransformPropertiesItemComponent implements OnInit, OnChanges {
    @Input() transformProperties: TransformProperties;

    transformTypes = transformTypes;

    public icon: string;
    public propertyKeys: string[];



    constructor() { }

    ngOnInit(): void {
        this.refresh();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.refresh();
    }

    refresh() {
        this.icon = null;
        this.propertyKeys = null;
        
        if (!this.transformProperties) { return; }
        let transform = this.transformTypes.find(c => c.key === this.transformProperties.transformType);
        if (transform) {
            this.icon = transform.icon;
        }

        if (this.transformProperties.properties) {
            this.propertyKeys = Object.keys(this.transformProperties.properties);
        }
    }

}
