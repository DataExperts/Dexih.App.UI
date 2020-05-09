import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';

@Component({
    selector: 'table-edit-button',
    templateUrl: './table-edit-button.component.html'
})
export class TableEditButtonComponent implements OnInit {
    @Input() key = null;

    public hubPath: string;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this.hubPath = this.hubService.getHubUrl();
    }
}
