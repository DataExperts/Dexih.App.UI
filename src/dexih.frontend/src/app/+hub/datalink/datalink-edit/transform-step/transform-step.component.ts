import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'transform-step',
    templateUrl: 'transform-step.component.html',
    styleUrls: ['./transforms.scss']

})
export class TransformStepComponent implements OnInit {
    @Input() routerLinkBefore: any;
    @Input() routerLinkAfter: any;
    @Input() routerLinkCurrent: any;
    @Input() routerLinkPreview: any;
    @Input() name: string;
    @Input() title: string;
    @Input() icon: string;
    @Input() control;
    @Input() showArrow = true;

    @Input() showDelete = false;
    @Input() isLast = false;

    @Output() onDelete = new EventEmitter();
    
    
    constructor() { }

    ngOnInit() { 
    }
}