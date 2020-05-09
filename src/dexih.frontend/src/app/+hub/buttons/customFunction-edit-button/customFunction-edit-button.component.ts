import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'customFunction-edit-button',
    templateUrl: './customFunction-edit-button.component.html'
})
export class CustomFunctionEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this.hubPath = this.hubService.getHubUrl();
    }
}
