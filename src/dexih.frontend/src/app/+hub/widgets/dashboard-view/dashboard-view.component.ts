import { Component, OnInit, Input } from '@angular/core';
import { DexihDashboard } from '../../hub.models';

@Component({
    selector: 'dashboard-view',
    templateUrl: './dashboard-view.component.html'
})

export class DashboardViewComponent implements OnInit {
    @Input() dashboard: DexihDashboard;

    constructor() { }

    ngOnInit() { }
}
