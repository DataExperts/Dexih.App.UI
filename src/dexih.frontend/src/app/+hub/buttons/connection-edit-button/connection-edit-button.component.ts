import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'connection-edit-button',
    templateUrl: './connection-edit-button.component.html'
})
export class ConnectionEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this.hubPath = this.hubService.getHubUrl();
    }
}
