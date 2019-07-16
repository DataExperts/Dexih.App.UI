import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html'
})

export class MenuItemComponent implements OnInit {
    @Input() name: string;
    @Input() title: string;
    @Input() routerLink: string;
    @Input() iconClass: string;

    constructor() { }

    ngOnInit() { }
}
