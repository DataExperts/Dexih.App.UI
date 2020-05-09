import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'columnValidation-edit-button',
    templateUrl: './columnValidation-edit-button.component.html'
})
export class ColumnValidationEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this.hubPath = this.hubService.getHubUrl();
    }
}
