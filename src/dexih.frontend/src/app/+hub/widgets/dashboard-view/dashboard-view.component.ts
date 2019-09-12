import { Component, OnInit, Input } from '@angular/core';
import { DexihDashboard } from '../../../shared/shared.models';

@Component({
    selector: 'dashboard-view',
    templateUrl: './dashboard-view.component.html'
})

export class DashboardViewComponent implements OnInit {
    @Input() dashboard: DexihDashboard;

    constructor() { }

    ngOnInit() { }
}
