import { Component, OnInit, Input, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { eInputFormat, ChartTypes } from './chart-groups';
import { colorSets } from './chart-colors';
import { Subscription, Observable } from 'rxjs';
import { ResizedEvent } from 'angular-resize-event';
import { ChartConfig, eChartType } from '../../shared.models';
import { Functions } from '../../utils/functions';

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
    public seriesPivotIndex: any = null;
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

    customColors = [];
    colorIndex = 0;

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
                this.ngOnChanges(null);
            });
        }
    }

    ngOnDestroy(): void {
        if (this._updateChartSubscription) { this._updateChartSubscription.unsubscribe(); }
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (this.columns) {
            this.labelColumnIndex = this.getColumnIndex(this.config.labelColumn);
            this.seriesColumnIndex = this.getColumnIndex(this.config.seriesColumn);
            this.seriesPivotIndex = this.getColumnIndex(this.config.pivotColumn);
            this.xColumnIndex = this.getColumnIndex(this.config.xColumn);
            this.yColumnIndex = this.getColumnIndex(this.config.yColumn);
            this.minColumnIndex = this.getColumnIndex(this.config.minColumn);
            this.maxColumnIndex = this.getColumnIndex(this.config.maxColumn);
            this.radiusColumnIndex = this.getColumnIndex(this.config.radiusColumn);
            this.latitudeColumnIndex = this.getColumnIndex(this.config.latitudeColumn);
            this.longitudeColumnIndex = this.getColumnIndex(this.config.longitudeColumn);

            if (simpleChanges !== null) {
                let keys = Object.keys(simpleChanges);
                if (keys.length === 1 && keys[0] === 'data') {
                    // do nothing
                } else {
                    this.customColors = [];
                }
            } else {
                this.customColors = [];
            }

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

    addCustomColor(label: string) {
        if ( this.customColors.findIndex(c => c.name === label) < 0) {
            let colorSet;

            if (this.config.colorScheme) {
                colorSet = colorSets.find(c => c.name === this.config.colorScheme);
            }
            if (!colorSet) {
                colorSet = colorSets[0];
            }

            let colors = colorSet.domain;

            if (this.colorIndex >= colors.length) {
                this.colorIndex = 0;
            }

            this.customColors.push({name: label, value: colors[this.colorIndex] });
            this.colorIndex++;
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
                        if (this.seriesPivotIndex != null) {
                            let pivotValues: any[] = this.uniqueValues(this.seriesPivotIndex);
                            let seriesCount = pivotValues.length * this.seriesColumnsIndex.length;
                            let pivotData = {};

                            for (let pivotIndex = 0; pivotIndex < pivotValues.length; pivotIndex++) {
                                let pivotValue = pivotValues[pivotIndex];
                                let data = this.data.filter(c => c[this.seriesPivotIndex] === pivotValue.value);

                                for (let i = 0; i < data.length; i++) {

                                    const label = data[i][this.labelColumnIndex];
                                    let row = pivotData[label];
                                    if (!row) {
                                        row = new Array(seriesCount);
                                        pivotData[label] = row;
                                    }

                                    for (let j = 0; j < this.seriesColumnsIndex.length; j++) {
                                        if (this.seriesColumnsIndex[j]) {
                                            row[((j + 1) * (pivotIndex + 1)) - 1 ] = {
                                                name: pivotValue.name + '/' + this.seriesColumnsIndex[j].title,
                                                value: this.formatValue2(data, this.seriesColumnsIndex[j].name, i)
                                            };
                                        }
                                    }
                                }
                            }

                            let labels = Object.keys(pivotData);
                            chartData = new Array(labels.length);
                            let labelColumn = this.columns[this.labelColumnIndex];

                            for (let i  = 0; i < labels.length; i++) {
                                chartData[i] = {
                                    name: Functions.formatValue(labels[i], labelColumn.format),
                                    series: pivotData[labels[i]].filter(c => c)
                                }
                            }
                        } else {
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
                    }
                    break;

                case eInputFormat.InverseSeries:
                    if (this.labelColumnIndex != null && this.seriesColumnsIndex.length > 0) {
                        if (this.seriesPivotIndex != null) {
                            let labelValues: any[] = this.uniqueValues(this.labelColumnIndex);
                            let seriesCount = labelValues.length * this.seriesColumnsIndex.length;
                            let pivotData = {};

                            for (let seriesIndex = 0; seriesIndex < labelValues.length; seriesIndex++) {
                                let seriesValue = labelValues[seriesIndex];
                                let data = this.data.filter(c => c[this.labelColumnIndex] === seriesValue.value);

                                for (let i = 0; i < data.length; i++) {
                                    for (let j = 0; j < this.seriesColumnsIndex.length; j++) {
                                        let pivotItem = data[i][this.seriesPivotIndex];
                                        if (this.seriesColumnsIndex.length > 0 ) {
                                            pivotItem += ' / ' + this.seriesColumnsIndex[j].title;
                                        }

                                        let row = pivotData[pivotItem];
                                        if (!row) {
                                            row = new Array(seriesCount);
                                            pivotData[pivotItem] = row;
                                        }

                                        if (this.seriesColumnsIndex[j]) {
                                            let name = this.formatValue2(data, this.labelColumnIndex, j);
                                            row[((j + 1) * (seriesIndex + 1)) - 1 ] = {
                                                name: name,
                                                value: this.formatValue2(data, this.seriesColumnsIndex[j].name, i)
                                            };
                                        }
                                    }
                                }
                            }

                            let labels = Object.keys(pivotData);
                            chartData = new Array(labels.length);
                            let seriesColumn = this.columns[this.seriesPivotIndex];

                            for (let i  = 0; i < labels.length; i++) {
                                chartData[i] = {
                                    name: Functions.formatValue(labels[i], seriesColumn.format),
                                    series: pivotData[labels[i]].filter(c => c)
                                }
                            }
                            this.setSeriesLabel(this.seriesColumnsIndex.map(c => c.title).join(' / '));
                        } else {
                            chartData = new Array(this.seriesColumnsIndex.length);
                            for (let i = 0; i < this.seriesColumnsIndex.length; i++) {
                                let series = new Array(this.data.length);
                                for (let j = 0; j < this.data.length; j++) {
                                    series[j] = {
                                        name: this.formatValue(this.labelColumnIndex, j),
                                        value: this.formatValue(this.seriesColumnsIndex[i].name, j)
                                    };
                                }
                                series = series.filter(c => c.value !== '');
                                chartData[i] = { name: this.seriesColumnsIndex[i].title, series: series };
                            }
                            this.setSeriesLabel(this.seriesColumnsIndex.map(c => c.title).join(' / '));
                        }
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

            if (chartData) {
                chartData.forEach(item => {
                    this.addCustomColor(item.name);
                });
            }

            this.results = chartData;
        }

    }

    uniqueValues(index: number): any[] {
        const format = this.columns[index].format;
        const values = Array.from(new Set(this.data.map(c => c[index]))).sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });

        const valuesSet = values.map(c => {
            return {
                name: Functions.formatValue(c, format),
                value: c
            }
        });
        return valuesSet;
    }

    formatValue(columnIndex: number, row: number) {
        if (columnIndex === null) {
            return row;
        }

        let value = this.data[row][columnIndex];
        let column = this.columns[columnIndex];

        return Functions.formatValue(value, column.format);
    }

    formatValue2(data: any[], columnIndex: number, row: number) {
        if (columnIndex === null) {
            return row;
        }

        let value = data[row][columnIndex];
        let column = this.columns[columnIndex];

        return Functions.formatValue(value, column.format);
    }
}
