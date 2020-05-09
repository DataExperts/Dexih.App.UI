import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'datalink-edit-button',
    templateUrl: './datalink-edit-button.component.html'
})
export class DatalinkEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this.hubPath = this.hubService.getHubUrl();
    }
}
