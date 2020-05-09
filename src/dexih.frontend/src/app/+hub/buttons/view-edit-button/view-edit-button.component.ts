import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'view-edit-button',
    templateUrl: './view-edit-button.component.html'
})
export class ViewEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() { 
        this.hubPath = this.hubService.getHubUrl();
    }
}
