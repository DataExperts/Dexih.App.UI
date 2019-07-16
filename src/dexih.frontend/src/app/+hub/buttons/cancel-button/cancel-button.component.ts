import { Component, OnInit, Input } from '@angular/core';
import { HubFormsService } from '../../hub.forms.service';

@Component({
    selector: 'cancel-button',
    templateUrl: './cancel-button.component.html'
})

export class CancelButtonComponent implements OnInit {
    @Input() formsService: HubFormsService;

    constructor() { }

    ngOnInit() { }
}
