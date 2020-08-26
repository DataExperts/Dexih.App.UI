import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'menu-parent',
    templateUrl: './menu-parent.component.html',
    animations: [
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideDown', [
        state('collapsed', style({ height: 0 })),
        state('expanded', style({ height: '*' })),
        transition('expanded <=> collapsed', animate('300ms ease-in')),
    ])
    ]
})

export class MenuParentComponent implements OnInit {
    @Input() name: string;
    @Input() title: string;
    @Input() iconClass: string;
    @Input() textClass: string;

    @ContentChild('item') itemTemplate: TemplateRef<any>;

    public expanded = false;
    public state = 'collapsed';

    constructor(private layoutService: LayoutService) { }

    ngOnInit() { }

    public toggle() {
        this.expanded = !this.expanded;
        this.state = this.expanded ? 'expanded' : 'collapsed';
  }
}