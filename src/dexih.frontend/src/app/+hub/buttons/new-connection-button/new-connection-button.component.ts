import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'new-connection-button',
    templateUrl: './new-connection-button.component.html'
})

export class NewConnectionButtonComponent implements OnInit {
    @Input() pullRight = true;

    constructor() { }

    ngOnInit() { }
}
