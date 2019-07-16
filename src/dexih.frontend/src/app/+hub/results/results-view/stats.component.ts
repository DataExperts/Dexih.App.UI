import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { TransformWriterResult, eRunStatus } from '../../hub.models';
import { HubService } from '../../hub.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
    @Input() auditResult: TransformWriterResult;

    exceptionHidden = true;

    columns: Array<any>;

    public barChartData: any[];

    public runTime: number;

    public fail = false;
    public success = false;


    constructor(public route: ActivatedRoute, public router: Router
    ) {

    }

    ngOnInit() {

        if (this.auditResult.endTime) {
            this.runTime = ( (new Date(this.auditResult.endTime)).valueOf() - (new Date(this.auditResult.startTime)).valueOf()) / 1000;
        } else {
            if (this.auditResult.runStatus === eRunStatus.Running ||
                this.auditResult.runStatus === eRunStatus.RunningErrors ||
                this.auditResult.runStatus === eRunStatus.Started) {
                    this.runTime = ( (new Date()).valueOf() -
                        (new Date(this.auditResult.startTime)).valueOf()) / 1000;
                } else {
                this.runTime = null;
            }
        }

        switch (this.auditResult.runStatus) {
            case eRunStatus.Abended:
            case eRunStatus.Cancelled:
            case eRunStatus.Failed:
            case eRunStatus.FinishedErrors:
                this.fail = true;
                break;
            case eRunStatus.Finished:
            case eRunStatus.Passed:
                this.success = true;

        }

        this.barChartData = [
            {
                name: 'Reading',
                value: this.rowsPerSecond(this.auditResult.rowsReadPrimary + this.auditResult.rowsReadReference, this.auditResult.readTicks)
            },
            {
                name: 'Processing',
                value: this.rowsPerSecond(this.auditResult.rowsTotal, this.auditResult.processingTicks)
            },
            {
                name: 'Writing',
                value: this.rowsPerSecond(this.auditResult.rowsTotal, this.auditResult.writeTicks)
            }
        ];

    }

    numberWithCommas(x) {
        const parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    rowsPerSecond(rows, ticks) {
        if (ticks === 0) {
            return 0;
        }
        return rows / (ticks / 10000000);
    }

    openResult(auditKey) {
        this.router.navigate(['..', auditKey], { relativeTo: this.route });
    }

}
