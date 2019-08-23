import { Component, OnInit, Input, OnChanges, EventEmitter, Output, ContentChild } from '@angular/core';
import { ChartTypes, eInputFormat } from './chart-groups';
import { ChartConfig, eChartType } from '../../../+hub/hub.models';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import * as html2canvas from 'html2canvas';
import { Subject } from 'rxjs';

@Component({
    selector: 'chart-builder',
    templateUrl: 'chart-builder.component.html'
})

export class ChartBuilderComponent implements OnInit, OnChanges {
    @Input() title = '';
    @Input() config: ChartConfig;
    @Input() columns: any[];
    @Input() data: Array<any>;
    @Input() showEdit = true;
    @Output() hasChanged = new EventEmitter();

    // public labelColumnIndex: any = null;
    // public seriesColumnIndex: any = null;
    // public seriesColumnsIndex = [];
    // public xColumnIndex: any = null;
    // public yColumnIndex: any = null;
    // public minColumnIndex: any = null;
    // public maxColumnIndex: any = null;
    // public radiusColumnIndex: any = null;
    // public latitudeColumnIndex: any = null;
    // public longitudeColumnIndex: any = null;

    eChartType = eChartType;
    eInputFormat = eInputFormat;
    chartTypes = ChartTypes;

    results: any[];

    chartType: any;
    colorSets = colorSets;

    private updateChartSubject: Subject<void> = new Subject<void>();

    constructor() { }

    ngOnInit() {
        if (!this.config) {
            this.config = new ChartConfig();
        }
    }

    ngOnChanges() {
        this.chartType = null;
        if (this.columns) {
            ChartTypes.forEach(chartGroup => {
                if (!this.chartType) {
                    this.chartType = chartGroup.charts.find(c => c.key === this.config.chartType);
                }
            });
        }
    }

    changeChart() {
        this.config.showXAxisLabel = this.chartType.defaultShowXAxisLabel;
        this.config.showYAxisLabel = this.chartType.defaultShowYAxisLabel;
        this.config.showXAxis = this.chartType.defaultShowXAxis;
        this.config.showYAxis = this.chartType.defaultShowYAxis;
        this.config.showGridLines = this.chartType.defaultShowGridLines;
        this.config.colorScheme = this.chartType.defaultColorScheme;
        this.config.showLegend = this.chartType.defaultShowLegend;
        this.hasChanged.emit();
        this.ngOnChanges();
    }

    updateChart() {
        // trigger a change event in the chart
        // this.config = Object.assign({}, this.config);
        this.hasChanged.emit();
        this.updateChartSubject.next();
        this.ngOnChanges();

    }

    onChanged() {
        this.hasChanged.emit();
    }

    export() {
        const chart = document.getElementById('chart');
        html2canvas.default(chart, <html2canvas.Options> {
            // height: 700,
            // width: 1000,
            scale: 3,
            // backgroundColor: null,
            logging: false,
            onclone: (document) => {
                document.getElementById('chart').style.visibility = 'visible';
            }
        }).then((canvas) => {
            // Get chart data so we can append to the pdf
            const chartData = canvas.toDataURL();
            // Prepare pdf structure
            const docDefinition = {
                content: [],
                styles: {
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                        alignment: 'left'
                    },
                    subsubheader: {
                        fontSize: 12,
                        italics: true,
                        margin: [0, 10, 0, 25],
                        alignment: 'left'
                    }
                },
                defaultStyle: {
                    // alignment: 'justify'
                }
            };

            canvas.toBlob(function (blob) {
                saveAs(blob, 'chart.png');
            }, 'image/png');
        });
    }
}
