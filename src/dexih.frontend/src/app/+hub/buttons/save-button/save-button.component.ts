import { Component, OnInit, Input } from '@angular/core';
import { HubFormsService } from '../../hub.forms.service';

@Component({
    selector: 'save-button',
    templateUrl: './save-button.component.html'
})

export class SaveButtonComponent implements OnInit {
    @Input() formsService: HubFormsService;

    constructor() { }

    ngOnInit() { }
}
