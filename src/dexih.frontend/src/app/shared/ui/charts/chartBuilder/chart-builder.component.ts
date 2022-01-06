import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ChartTypes, eInputFormat } from '../chart-groups';
import { colorSets } from '../chart-colors';
import * as html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
import { ChartConfig, eChartType, eLineCurveItems } from '../../../shared.models';
import * as saveAs from 'file-saver';

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
    eLineCurveItems = eLineCurveItems;

    results: any[];

    chartType: any;
    colorSets = colorSets;

    public updateDataSubject: Subject<void> = new Subject<void>();
    public updateOptionsSubject: Subject<void> = new Subject<void>();

    constructor() { }

    ngOnInit() {
        if (!this.config) {
            this.config = new ChartConfig();
        }
    }

    ngOnChanges() {
        this.chartType = null;
        if (this.columns && this.config) {
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
        this.config.showDataLabel = this.chartType.defaultShowLabels;
        this.config.showDataValue = this.chartType.defaultShowLabels;
        this.hasChanged.emit();
        this.ngOnChanges();
    }

    updateChartType() {
        this.updateChartLayout();
        this.updateChartData();
    }

    updateChartData() {
        // trigger a change event in the chart
        // this.config = Object.assign({}, this.config);
        this.hasChanged.emit();
        this.updateDataSubject.next();
        this.ngOnChanges();

    }

    updateChartLayout() {
        this.ngOnChanges();
        this.updateOptionsSubject.next();
        this.hasChanged.emit();
    }

    export() {
        const chart = document.getElementById('chart');
        if (chart == null) {
            return;
        }

        let svgElem = chart.getElementsByTagName('svg');
        for (const node of Array.from(svgElem)) {
            node.setAttribute('font-family', window.getComputedStyle(node, null).getPropertyValue('font-family'));
            node.replaceWith(node);
        }

        html2canvas.default(chart, <html2canvas.Options> {
            height: chart.clientHeight,
            width: chart.clientWidth,
            scale: 3,
            // backgroundColor: null,
            logging: false,
            // onclone: (document) => {
            //     document.getElementById('chart').style.visibility = 'visible';
            // }
        }).then((canvas) => {
            // // Get chart data so we can append to the pdf
            // const chartData = canvas.toDataURL();
            // // Prepare pdf structure
            // const docDefinition = {
            //     content: [],
            //     styles: {
            //         subheader: {
            //             fontSize: 16,
            //             bold: true,
            //             margin: [0, 10, 0, 5],
            //             alignment: 'left'
            //         },
            //         subsubheader: {
            //             fontSize: 12,
            //             italics: true,
            //             margin: [0, 10, 0, 25],
            //             alignment: 'left'
            //         }
            //     },
            //     defaultStyle: {
            //         // alignment: 'justify'
            //     }
            // };

            canvas.toBlob((blob) => {
                saveAs(blob, 'chart.png');
            }, 'image/png');
        });
    }
}
