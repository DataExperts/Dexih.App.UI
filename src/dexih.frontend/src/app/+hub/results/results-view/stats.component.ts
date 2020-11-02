import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { TransformWriterResult, eRunStatus, eTriggerMethod } from '../../../shared/shared.models';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { formatNumber } from '@angular/common';
import { Functions } from '../../../shared/utils/functions';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
    @Input() auditResult: TransformWriterResult;

    exceptionHidden = true;

    columns: Array<any>;

    public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{
            ticks: {
                callback: (value) => {
                    return Functions.numberWithCommas(value);
                }
            }
        }] },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value: number, ctx) => {
                let v = value.toFixed(2);
                return Functions.numberWithCommas(v);
            }
          }
        }
      };
      public barChartLabels: Label[] = ['Reading', 'Processing', 'Writing'];
      public barChartType: ChartType = 'bar';
      public barChartLegend = true;
      public barChartPlugins = [pluginDataLabels];
    
      public barChartData: ChartDataSets[] = [];

      public runTime: number;

    public fail = false;
    public success = false;
    eRunStatus = eRunStatus;
    eTriggerMethod = eTriggerMethod;


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
            { data: [
                this.rowsPerSecond(this.auditResult.rowsReadPrimary + this.auditResult.rowsReadReference, this.auditResult.readTicks),
                this.rowsPerSecond(this.auditResult.rowsTotal, this.auditResult.processingTicks),
                this.rowsPerSecond(this.auditResult.rowsTotal, this.auditResult.writeTicks)
            ], label: 'Rows / Second', backgroundColor: 'lightblue'}
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
