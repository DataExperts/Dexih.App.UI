import { Component, OnInit, Input } from '@angular/core';
import { eConnectionPurpose } from '../../../shared/shared.models';

@Component({
    selector: 'new-connection-button',
    templateUrl: './new-connection-button.component.html'
})

export class NewConnectionButtonComponent implements OnInit {
    @Input() pullRight = true;

    eConnectionPurpose = eConnectionPurpose;

    constructor() { }

    ngOnInit() { }
}
