import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'encryption-status-icon',
    templateUrl: './encryption-status.component.html'
})

export class EncryptionStatusIconComponent implements OnInit {
    @Input() isEncrypted = false;

    @Output() click = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    doClick() {
        this.click.emit(true);
    }
}
