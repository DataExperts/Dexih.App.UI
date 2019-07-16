import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartTypes, eInputFormat } from './chart-groups';
import { ChartConfig, eChartType } from '../../../+hub/hub.models';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import * as html2canvas from 'html2canvas';
import { Column } from 'dexih-ngx-table';

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

    public labelColumnIndex: any = null;
    public seriesColumnIndex: any = null;
    public seriesColumnsIndex = [];
    public xColumnIndex: any = null;
    public yColumnIndex: any = null;
    public minColumnIndex: any = null;
    public maxColumnIndex: any = null;
    public radiusColumnIndex: any = null;
    public latitudeColumnIndex: any = null;
    public longitudeColumnIndex: any = null;


    eChartType = eChartType;
    eInputFormat = eInputFormat;
    chartTypes = ChartTypes;

    results: any[];

    chartType: any;
    colorSets = colorSets;

    constructor() { }

    ngOnInit() {
        if (!this.config) {
            this.config = new ChartConfig();
        }
        this.getChartType();
    }

    ngOnChanges() {
        if (this.columns) {
            this.labelColumnIndex = this.getColumnIndex(this.config.labelColumn);
            this.seriesColumnIndex = this.getColumnIndex(this.config.seriesColumn);
            this.xColumnIndex = this.getColumnIndex(this.config.xColumn);
            this.yColumnIndex = this.getColumnIndex(this.config.yColumn);
            this.minColumnIndex = this.getColumnIndex(this.config.minColumn);
            this.maxColumnIndex = this.getColumnIndex(this.config.maxColumn);
            this.radiusColumnIndex = this.getColumnIndex(this.config.radiusColumn);
            this.latitudeColumnIndex = this.getColumnIndex(this.config.latitudeColumn);
            this.longitudeColumnIndex = this.getColumnIndex(this.config.longitudeColumn);

            if (this.config.seriesColumns) {
                this.seriesColumnsIndex = new Array(this.config.seriesColumns.length);
                for (let i = 0; i < this.config.seriesColumns.length; i++) {
                    this.seriesColumnsIndex[i] = this.columns.find(c => c.title === this.config.seriesColumns[i]);
                }
            }

            this.getChartType();

            this.updateChart();
        }
    }

    getChartType() {
        ChartTypes.forEach(chartGroup => {
            if (!this.chartType) {
                this.chartType = chartGroup.charts.find(c => c.key === this.config.chartType);
            }
        });
    }

    getColumnTitle(index: number): string {
        if (index >= 0) {
            let col = this.columns[index];
            if (col) {
                return col.title;
            }
        }
        return null;
    }

    getColumnIndex(title: string): number {
        if (title) {
            let index = this.columns.findIndex(c => c.title === title);
            return index;
        }
        return null;
    }

    // sets the label to either xseries or yseries dending on whether horizontal/vertical chart.
    setLabel(label: string) {
        if (this.chartType.isHorizontal) {
            this.config.yAxisLabel = label;
        } else {
            this.config.xAxisLabel = label;
        }
    }

    setSeriesLabel(seriesLabel: string) {
        if (this.chartType.isHorizontal) {
            this.config.xAxisLabel = seriesLabel;
        } else {
            this.config.yAxisLabel = seriesLabel;
        }
    }

    updateChart() {
        if (this.chartType && this.data) {

            this.config.chartType = this.chartType.key;
            this.config.labelColumn = this.getColumnTitle(this.labelColumnIndex);
            this.config.seriesColumn = this.getColumnTitle(this.seriesColumnIndex);
            this.config.xColumn = this.getColumnTitle(this.xColumnIndex);
            this.config.yColumn = this.getColumnTitle(this.yColumnIndex);
            this.config.minColumn = this.getColumnTitle(this.minColumnIndex);
            this.config.maxColumn = this.getColumnTitle(this.maxColumnIndex);
            this.config.radiusColumn = this.getColumnTitle(this.radiusColumnIndex);
            this.config.latitudeColumn = this.getColumnTitle(this.latitudeColumnIndex);
            this.config.longitudeColumn = this.getColumnTitle(this.longitudeColumnIndex);

            this.config.showXAxisLabel = this.chartType.defaultShowXAxisLabel;
            this.config.showYAxisLabel = this.chartType.defaultShowYAxisLabel;
            this.config.showXAxis = this.chartType.defaultShowXAxis;
            this.config.showYAxis = this.chartType.defaultShowYAxis;
            this.config.showGridLines = this.chartType.defaultShowGridLines;
            this.config.colorScheme = this.chartType.defaultColorScheme;
            this.config.showLegend = this.chartType.defaultShowLegend;

            if (this.seriesColumnsIndex) {
                this.config.seriesColumns = new Array(this.seriesColumnsIndex.length);
                for (let i = 0; i < this.seriesColumnsIndex.length; i++) {
                    this.config.seriesColumns[i] = this.seriesColumnsIndex[i].title;
                }
            }

            if (this.labelColumnIndex !== null) {
                this.setLabel(this.columns[this.labelColumnIndex].title);
            }

            let chartData: Array<any>;

            switch (this.chartType.inputFormat) {
                case eInputFormat.SingleSeries:
                    if (this.labelColumnIndex !== null && this.seriesColumnIndex != null) {
                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                value: this.formatValue(this.seriesColumnIndex, i, false)
                            };
                        }
                        this.setSeriesLabel(this.columns[this.seriesColumnIndex].title);
                    }
                    break;

                case eInputFormat.MultiSeries:
                    if (this.labelColumnIndex != null && this.seriesColumnsIndex.length > 0) {
                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            let series = new Array(this.seriesColumnsIndex.length);
                            for (let j = 0; j < this.seriesColumnsIndex.length; j++) {
                                if (this.seriesColumnsIndex[j]) {
                                    series[j] = {
                                        name: this.seriesColumnsIndex[j].title,
                                        value: this.formatValue(this.seriesColumnsIndex[j].name, i, false)
                                    };
                                }
                            }
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                series: series
                            };
                        }
                        this.setSeriesLabel(this.seriesColumnsIndex.map(c => c.title).join(' / '));
                    }
                    break;

                case eInputFormat.InverseSeries:
                    if (this.labelColumnIndex != null && this.seriesColumnsIndex.length > 0) {

                        chartData = new Array(this.seriesColumnsIndex.length);
                        for (let i = 0; i < this.seriesColumnsIndex.length; i++) {
                            let series = new Array(this.data.length);
                            for (let j = 0; j < this.data.length; j++) {
                                series[j] = {
                                    name: this.formatValue(this.labelColumnIndex, j, true),
                                    value: this.formatValue(this.seriesColumnsIndex[i].name, j, true)
                                };
                            }
                            chartData[i] = { name: this.seriesColumnsIndex[i].title, series: series };
                        }
                        this.setSeriesLabel(this.seriesColumnsIndex.map(c => c.title).join(' / '));
                    }
                    break;

                case eInputFormat.Xy:
                    if (this.yColumnIndex != null && this.xColumnIndex != null) {
                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i, true),
                                    x: this.formatValue(this.xColumnIndex, i, false),
                                    y: this.formatValue(this.yColumnIndex, i, false),
                                    r: 10
                                }]
                            };
                        }
                        this.config.yAxisLabel = this.columns[this.yColumnIndex].title;
                        this.config.xAxisLabel = this.columns[this.xColumnIndex].title;
                    }
                    break;

                case eInputFormat.XyMinMax:
                    if (this.yColumnIndex != null && this.xColumnIndex != null) {
                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i, true),
                                    x: this.formatValue(this.xColumnIndex, i, false),
                                    y: this.formatValue(this.yColumnIndex, i, false),
                                    min: this.formatValue(this.minColumnIndex, i, false),
                                    max: this.formatValue(this.maxColumnIndex, i, false)
                                }]
                            };
                        }
                        this.config.yAxisLabel = this.columns[this.yColumnIndex].title;
                        this.config.xAxisLabel = this.columns[this.xColumnIndex].title;
                    }
                    break;


                case eInputFormat.XyBubble:
                    if (this.yColumnIndex != null && this.xColumnIndex != null) {

                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i, true),
                                    x: this.formatValue(this.xColumnIndex, i, false),
                                    y: this.formatValue(this.yColumnIndex, i, false),
                                    r: this.formatValue(this.radiusColumnIndex, i, false)
                                }]
                            };
                        }
                        this.config.yAxisLabel = this.columns[this.yColumnIndex].title;
                        this.config.xAxisLabel = this.columns[this.xColumnIndex].title;
                    }
                    break;

                case eInputFormat.GeoCoordinates:
                    if (this.latitudeColumnIndex != null && this.longitudeColumnIndex != null) {
                        chartData = new Array(this.data.length);
                        for (let i = 0; i < this.data.length; i++) {
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i, true),
                                value: this.formatValue(this.seriesColumnIndex, i, false),
                                latitude: this.formatValue(this.latitudeColumnIndex, i, false),
                                longitude: this.formatValue(this.longitudeColumnIndex, i, false),
                            };
                        }
                    }
                    break;
            }
            this.results = chartData;
        }

    }

    formatValue(columnIndex: number, row: number, defaultToIndex = false) {
        if (columnIndex === null) {
            return row;
        }

        let value = this.data[row][columnIndex];
        let column = this.columns[columnIndex];

        if (!value && value !== false && value !== 0) {
            return '';
        } else if (Object.keys(value).length === 0 && value.constructor === Object) {
            return '(null)';
        } else {
            switch (column.format) {
                case 'Date':
                    return (new Date(value).toLocaleDateString());
                case 'Time':
                    return (new Date(value).toLocaleTimeString());
                case 'DateTime':
                    return (new Date(value).toLocaleDateString()) + ' ' + (new Date(value).toLocaleTimeString());
                case 'CharArray':
                    return [].concat(value).join('');
                default:
                    return value;
            }
        }
    }

    export() {
        const chart = document.getElementById('chart');
        html2canvas.default(chart, <html2canvas.Options> {
            height: 700,
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
