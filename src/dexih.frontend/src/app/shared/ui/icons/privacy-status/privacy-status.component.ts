import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { eDataPrivacyStatus } from '../../../../+auth/auth.models';

@Component({
    selector: 'privacy-status-icon',
    templateUrl: './privacy-status.component.html'
})

export class PrivacyStatusButtonComponent implements OnInit {
    @Input() privacyStatus: eDataPrivacyStatus;

    eDataPrivacyStatus = eDataPrivacyStatus;

    @Output() click = new EventEmitter();

    constructor() { }

    ngOnInit() {  }

    doClick() {
        this.click.emit(true);
    }
}
