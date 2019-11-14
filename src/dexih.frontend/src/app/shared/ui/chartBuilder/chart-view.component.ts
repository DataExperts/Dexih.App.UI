import { Component, OnInit, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { eInputFormat, ChartTypes } from './chart-groups';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { Subscription, Observable } from 'rxjs';
import { ResizedEvent } from 'angular-resize-event';
import { ChartConfig, eChartType } from '../../shared.models';

@Component({
    selector: 'chart-view',
    templateUrl: 'chart-view.component.html',
    styleUrls: ['./chart-view.component.scss']
})

export class ChartViewComponent implements OnInit, OnDestroy, OnChanges {
    @Input() config: ChartConfig;
    @Input() columns: any[];
    @Input() data: Array<any>;
    @Input() updateChartEvent: Observable<void>;
    @Input() responsive = false;

    private _updateChartSubscription: Subscription;

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

    view: any;

    constructor() {
    }

    ngOnInit() {
        if (!this.config) {
            this.config = new ChartConfig();
        }
        this.getChartType();

        if (this.updateChartEvent) {
            this._updateChartSubscription = this.updateChartEvent.subscribe(() => {
                this.ngOnChanges();
            });
        }
    }

    ngOnDestroy(): void {
        if (this._updateChartSubscription) { this._updateChartSubscription.unsubscribe(); }
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
                    let col = this.columns.find(c => c.title === this.config.seriesColumns[i]);
                    if (col) {
                        this.seriesColumnsIndex[i] = col;
                    }
                }
            }

            this.getChartType();
            this.updateChart();
            // this.view = [this.width, this.height];
        }
    }

    // onResize() {
    //     this.createView();
    // }

    onResized(event: ResizedEvent) {
        // legend needs to be padded as ngx-charts not calculating size correctly.
        // https://github.com/swimlane/ngx-charts/issues/1248
        if (this.config.showLegend && this.config.legendPosition === 'below') {
            this.view = [event.newWidth, event.newHeight - 60];
        } else {
            this.view = [event.newWidth, event.newHeight];
        }
    }

    getChartType() {
        this.chartType = null;
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

    // sets the label to either x-series or y-series depending on whether horizontal/vertical chart.
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

            this.getChartType();

            // this.config.labelColumn = this.getColumnTitle(this.labelColumnIndex);
            // this.config.seriesColumn = this.getColumnTitle(this.seriesColumnIndex);
            // this.config.xColumn = this.getColumnTitle(this.xColumnIndex);
            // this.config.yColumn = this.getColumnTitle(this.yColumnIndex);
            // this.config.minColumn = this.getColumnTitle(this.minColumnIndex);
            // this.config.maxColumn = this.getColumnTitle(this.maxColumnIndex);
            // this.config.radiusColumn = this.getColumnTitle(this.radiusColumnIndex);
            // this.config.latitudeColumn = this.getColumnTitle(this.latitudeColumnIndex);
            // this.config.longitudeColumn = this.getColumnTitle(this.longitudeColumnIndex);

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
                                name: this.formatValue(this.labelColumnIndex, i),
                                value: this.formatValue(this.seriesColumnIndex, i)
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
                                        value: this.formatValue(this.seriesColumnsIndex[j].name, i)
                                    };
                                }
                            }
                            chartData[i] = {
                                name: this.formatValue(this.labelColumnIndex, i),
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
                                    name: this.formatValue(this.labelColumnIndex, j),
                                    value: this.formatValue(this.seriesColumnsIndex[i].name, j)
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
                                name: this.formatValue(this.labelColumnIndex, i),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i),
                                    x: this.formatValue(this.xColumnIndex, i),
                                    y: this.formatValue(this.yColumnIndex, i),
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
                                name: this.formatValue(this.labelColumnIndex, i),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i),
                                    x: this.formatValue(this.xColumnIndex, i),
                                    y: this.formatValue(this.yColumnIndex, i),
                                    min: this.formatValue(this.minColumnIndex, i),
                                    max: this.formatValue(this.maxColumnIndex, i)
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
                                name: this.formatValue(this.labelColumnIndex, i),
                                series: [{
                                    name: this.formatValue(this.labelColumnIndex, i),
                                    x: this.formatValue(this.xColumnIndex, i),
                                    y: this.formatValue(this.yColumnIndex, i),
                                    r: this.formatValue(this.radiusColumnIndex, i)
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
                                name: this.formatValue(this.labelColumnIndex, i),
                                value: this.formatValue(this.seriesColumnIndex, i),
                                latitude: this.formatValue(this.latitudeColumnIndex, i),
                                longitude: this.formatValue(this.longitudeColumnIndex, i),
                            };
                        }
                    }
                    break;
            }
            this.results = chartData;
        }

    }

    formatValue(columnIndex: number, row: number) {
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
}
