import { Component, OnInit, Input, OnChanges, OnDestroy,
    SimpleChanges, ViewChildren } from '@angular/core';
import { eInputFormat, ChartTypes, ChartItem } from '../chart-groups';
import { colorSets } from '../chart-colors';
import { Subscription, Observable } from 'rxjs';
import { ChartConfig, ChartSeries, eChartType, eLineCurve } from '../../../shared.models';
import { Functions } from '../../../utils/functions';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, PositionType } from 'chart.js';
import { QueryList } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'chart-view',
    templateUrl: 'chart-view.component.html',
    styleUrls: ['./chart-view.component.scss']
})

export class ChartViewComponent implements OnInit, OnDestroy, OnChanges {
    @Input() config: ChartConfig;
    @Input() columns: any[];
    @Input() data: Array<any>;
    @Input() updateDataEvent: Observable<void>;
    @Input() updateOptionsEvent: Observable<void>;
    @Input() responsive = false;

    @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

    public gridColumnIndex: any = null;
    public labelColumnIndex: any = null;
    public seriesPivotIndex: any = null;
    public seriesColumnsIndex: {column, config: ChartSeries}[] = [];
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

    resultArray: ChartItem[];

    chartType: any;
    colorSets = colorSets;

    customColors = [];
    colorIndex = 0;
    labelColors = {};

    view: any;

    public chartOptions: ChartOptions;

    private _updateChartSubscription: Subscription;
    private _updateOptionsSubscription: Subscription;


    constructor() {
    }

    ngOnInit() {
        this.getChartType();

        if (this.updateDataEvent) {
            this._updateChartSubscription = this.updateDataEvent.pipe(debounceTime(1000)).subscribe(() => {
                this.ngOnChanges(null);
            });

            this._updateOptionsSubscription = this.updateOptionsEvent.pipe(debounceTime(1000)).subscribe(() => {
                this.getChartType();
                this.updateChartLayout();
                this.updateChartOptions();
                if (this.charts) {
                    for(const chart of this.charts) {
                        (<any>chart).refresh(); // workaround https://github.com/valor-software/ng2-charts/issues/547
                    }
                }
            });

        }
    }

    ngOnDestroy(): void {
        if (this._updateChartSubscription) { this._updateChartSubscription.unsubscribe(); }
        if (this._updateOptionsSubscription) { this._updateOptionsSubscription.unsubscribe(); }
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (this.columns) {
            this.gridColumnIndex = this.getColumnIndex(this.config.multiGridColumn);
            this.labelColumnIndex = this.getColumnIndex(this.config.labelColumn);
            // this.seriesColumnIndex = this.getColumnIndex(this.config.seriesColumn);
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
                this.seriesColumnsIndex = [];
                for (let i = 0; i < this.config.seriesColumns.length; i++) {
                    let col = this.columns.find(c => c.title === this.config.seriesColumns[i].column);
                    if (col) {
                        this.seriesColumnsIndex.push({column: col, config: this.config.seriesColumns[i]});
                    }
                }
            }

            this.getChartType();
            this.updateChart();
            // this.view = [this.wrapper.nativeElement.clientWidth, this.wrapper.nativeElement.clientHeight];
        }
    }

    trackChartChange(index: number, data: any) {
        if (data && data[index]) {
            return data[index].name;
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

    addCustomColor(label: string, changeColor = true) {
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

            if (changeColor) {
                this.colorIndex++;
            }
        }
    }

    getColor(index): string {
        let colorSet = this.getColorSet();
        let i = index % colorSet.length;

        return colorSet[i];
    }

    getColorSet(): string[] {
        let colorSet;
        if (this.config.colorScheme) {
            colorSet = colorSets.find(c => c.name === this.config.colorScheme);
        }
        if (!colorSet) {
            colorSet = colorSets[0];
        }
        return colorSet.domain;
    }

    generateColorSet(labels: Label[], lightenPercent = 1): string[] {
        let count = labels.length;
        const colors = new Array<string>(labels.length);

        for (let i = 0; i < labels.length; i++) {
            const label = labels[i];
            let color = this.labelColors[label.toString()];

            if(!color) {
                color = this.getColor(count++);
                this.labelColors[label.toString()] = color;
            }
            if(lightenPercent === 1) {
                colors[i] = color;
            } else {
                colors[i] = this.pSBC(lightenPercent, color, null, null);
            }
        }

        return colors;
    }

    updateChart() {
        if (this.chartType && this.data) {

            this.getChartType();

            if (this.labelColumnIndex !== null && this.labelColumnIndex >= 0) {
                this.setLabel(this.columns[this.labelColumnIndex].title);
            }

            let values: Array<any>;

            if (!this.resultArray) {
                this.resultArray = [];
            }

            let chartItems: Array<any> = this.resultArray;

            if (this.gridColumnIndex != null && this.gridColumnIndex >= 0) {
                values = this.gridSeriesValues(this.data);
            } else {
                values = [null];
            }

            // resize the chartItems array to match the values.
            while (values.length > chartItems.length) {
                chartItems.push({});
            }
            if(chartItems.length !== values.length) {
                chartItems.length = values.length;
            }



            for (let chartIndex = 0; chartIndex < values.length; chartIndex++) {
                let value = values[chartIndex];
                let chartItem = chartItems[chartIndex];

                // let chartItem: Array<any>;
                let data;
                if (this.gridColumnIndex != null && this.gridColumnIndex >= 0 ) {
                    data = this.data.filter(c => c[this.gridColumnIndex] === value.value);
                } else {
                    data = this.data;
                }

  
                switch (this.chartType.inputFormat) {
                    case eInputFormat.MultiSeries:
                        let dataSets: ChartDataSets[];
                        let labels: Label[];

                        if (this.seriesPivotIndex != null) {
                            let pivotValues: any[] = this.uniqueValues(data, this.seriesPivotIndex);
                            let seriesCount = pivotValues.length * this.seriesColumnsIndex.length;
                            let pivotData = {};

                            let seriesLabels = new Array<string>(seriesCount);

                            for (let pivotIndex = 0; pivotIndex < pivotValues.length; pivotIndex++) {
                                let pivotValue = pivotValues[pivotIndex];
                                let seriesData = data.filter(c => c[this.seriesPivotIndex] === pivotValue.value);

                                for (let i = 0; i < seriesData.length; i++) {

                                    const label = seriesData[i][this.labelColumnIndex];
                                    let row = pivotData[label];
                                    if (!row) {
                                        row = new Array(seriesCount);
                                        pivotData[label] = row;
                                    }


                                    for (let j = 0; j < this.seriesColumnsIndex.length; j++) {
                                        if (i === 0) {
                                            seriesLabels[((j + 1) * (pivotIndex + 1)) - 1] = pivotValue.name + ' / ' + this.seriesColumnsIndex[j].column.title
                                        }
    
                                        if (this.seriesColumnsIndex[j]) {
                                            row[((j + 1) * (pivotIndex + 1)) - 1 ] = this.rawValue(seriesData, this.seriesColumnsIndex[j].column.name, i)
                                        }
                                    }
                                }
                            }

                            labels = Object.keys(pivotData);
                            dataSets = new Array<ChartDataSets>(seriesLabels.length);

                            for (let i  = 0; i < seriesLabels.length; i++) {
                                const dataSet: ChartDataSets = {};
                                dataSet.data = new Array(labels.length);
                                dataSet.label = seriesLabels[i];

                                for (let j = 0; j < labels.length; j++) {
                                    dataSet.data[j] = pivotData[labels[j].toString()][i];
                                }
                                dataSets[i] = dataSet;
                            }

                            let labelColumn = this.columns[this.labelColumnIndex];
                            labels = labels.map(label => Functions.formatValue(label, labelColumn.format));

                            this.setSeriesLabel(this.seriesColumnsIndex.map(c => c.column.title).join(' / '));
                        } else {
                            labels = new Array<Label>(data.length);
                            for (let i = 0; i < data.length; i++) {
                                labels[i] = this.formatValue(data, this.labelColumnIndex, i).toString();
                            }

                            dataSets = new Array<ChartDataSets>(this.seriesColumnsIndex.length);
                            for (let i = 0; i < this.seriesColumnsIndex.length; i++) {
                                const dataSet: ChartDataSets = {};
                                dataSet.data = new Array(data.length);
                                dataSet.label = this.seriesColumnsIndex[i].column.title;
                                dataSet.type = this.chartType.key === eChartType.BarVertical && this.seriesColumnsIndex[i].config.lineChart ? 'line' : null;
                                dataSet.yAxisID = this.chartType.key === eChartType.BarVertical && this.chartType.isBar && this.seriesColumnsIndex[i].config.alternateAxis ? 'right' : null;

                                for (let j = 0; j < data.length; j++) {
                                    dataSet.data[j] = this.rawValue(data, this.seriesColumnsIndex[i].column.name, j);
                                }

                                dataSets[i] = dataSet;
                            }
                        }

                        // configure other dataset options.
                        for(let i = 0; i < dataSets.length; i++) {
                            let dataSet = dataSets[i];
                            dataSet.fill = this.config.fill;
                            dataSet.spanGaps = this.config.spanGaps;

                            switch(this.config.lineCurve) {
                                case eLineCurve.Straight:
                                    dataSet.lineTension = 0;
                                    dataSet.cubicInterpolationMode = 'default';
                                    break;
                                case eLineCurve.Bezier:
                                    dataSet.lineTension = 0.4;
                                    dataSet.cubicInterpolationMode = 'default';
                                    break;
                                case eLineCurve.Monotone:
                                    dataSet.lineTension = 0;
                                    dataSet.cubicInterpolationMode = 'monotone';
                                    break;
                            }
                            // dataSet.lineTension = 1;

                            // if this is not a pivot series, then attempt to get the series color.
                            const baseColor = this.seriesPivotIndex === null ? 
                                this.seriesColumnsIndex[i].config.color ?? this.getColor(i) :
                                this.getColor(i);

                            this.labelColors = {};

                            if((this.config.singleBarColor && this.chartType.isBar)) {
                                dataSet.hoverBackgroundColor = this.pSBC(-0.3, baseColor, null, null);
                                dataSet.backgroundColor = baseColor;
                            }
                            else if(this.chartType.type === 'line' || dataSet.type === 'line' ) {
                                dataSet.pointBackgroundColor = this.pSBC(-0.3, baseColor, null, null);
                                dataSet.hoverBackgroundColor = this.pSBC(-0.3, baseColor, null, null);
                                dataSet.borderColor = baseColor;
                                dataSet.backgroundColor = this.pSBC(0.3, baseColor, null, null);
                            } else {
                                dataSet.hoverBackgroundColor = this.generateColorSet(labels, -0.3);
                                if (this.chartType.isBar) {
                                    dataSet.backgroundColor = this.generateColorSet(labels, 0);
                                } else {
                                    dataSet.pointBackgroundColor = this.generateColorSet(labels, 0);
                                    dataSet.borderColor = this.generateColorSet(labels, -0.3);
                                    dataSet.backgroundColor = this.generateColorSet(labels, 0);
                                }
                            }
                        }

                        this.setSeriesLabel(this.seriesColumnsIndex.filter(c => !c.config.alternateAxis).map(c => c.column.title).join(' / '));
                        this.config.yAxisLabelRight = this.seriesColumnsIndex.filter(c => c.config.alternateAxis).map(c => c.column.title).join(' / ')

                        if (chartItem.dataSets) {
                            for(let i = 0; i < dataSets.length; i++) {
                                if(i < chartItem.dataSets.length) {
                                    // copy each property to update the chart item
                                    const dataSetKeys = Object.keys(chartItem.dataSets[i]);
                                    dataSetKeys.forEach(key => {
                                        chartItem.dataSets[i][key] = dataSets[i][key];
                                    });
                                } else {
                                    chartItem.dataSets.push(dataSets[i])
                                }
                            }

                            if (chartItem.dataSets.length > dataSets.length) {
                                chartItem.dataSets.length = dataSets.length;
                            }
                        } else {
                            chartItem.dataSets = dataSets;
                        }

                        chartItem.name = value?.name;
                        // chartItem.data = undefined;
                        // chartItem.dataSets = dataSets;
                        chartItem.labels = labels;


                        // if(chartItem.labels) {
                        //     chartItem.labels.splice(0, chartItem.labels.length);
                        //     labels.forEach(label => {chartItem.labels.push(label)})
                        // } else {
                        //     chartItem.labels = labels;
                        // }


                        // chartItems.push({name: value?.name, dataSets: dataSets, data: undefined, labels: labels});
                        break;
                    case eInputFormat.Xy:
                    case eInputFormat.XyBubble:
                        let labelValues: any[] = this.uniqueValues(data, this.labelColumnIndex);
                        let data1 = new Array<ChartDataSets>(labelValues.length);

                        for (let i = 0; i < labelValues.length; i++) {
                            let labelData = data.filter(c => c[this.labelColumnIndex] === labelValues[i].value);
                            let xyData = new Array(labelData.length);

                            for (let j = 0; j < labelData.length; j++) {
                                xyData[j] = {
                                    x: this.rawValue(labelData, this.xColumnIndex, j),
                                    y: this.rawValue(labelData, this.yColumnIndex, j),
                                    r: this.chartType.inputFormat === eInputFormat.XyBubble ? this.rawValue(labelData, this.radiusColumnIndex, i) ?? 3 : 3
                                };
                            }

                            let color = this.getColor(i);

                            data1[i] = {
                                  data: xyData,
                                  radius: 3,
                                  label: labelValues[i].name,
                                  backgroundColor: color,
                                  pointBackgroundColor: color,
                            };
                        }

                        this.config.yAxisLabel = this.columns[this.yColumnIndex].title;
                        this.config.xAxisLabel = this.columns[this.xColumnIndex].title;

                        chartItem.name = value?.name;
                        chartItem.dataSets = data1;
                        chartItem.data = undefined;
                        chartItem.labels = undefined;

                        // chartItems.push({name: value?.name, dataSets: data1, data: undefined, labels: undefined})
                        break;
                }

                this.updateChartOptions();

            }

            // this.resultArray = chartItems;

            this.updateChartData();

        }

    }

    updateChartData() {
        if (this.charts) {
            for(const chart of this.charts) {
                // chart.chart.destroy();
                // chart.datasets = this.chartData;
                // chart.labels = this.labels;
                // chart.options = this.chartOptions;
                chart.plugins = this.config.showDataLabel ? [ChartDataLabels] : [];
                // chart.chartType = this.chartType.type;
                // chart.ngOnInit();
                chart.update();
            }
        }
    }

    updateChartLayout() {
        if (this.charts) {
            for(const chart of this.charts) {
                chart.chart.destroy();
                // chart.datasets = this.chartData;
                // chart.labels = this.labels;
                chart.options = this.chartOptions;
                chart.chartType = this.chartType.type;
                chart.ngOnInit();
                // chart.update();
            }
        }
    }


    gridSeriesValues(data: any[]): any {
        const format = this.columns[this.gridColumnIndex].format;
        const values = Array.from(new Set(data.map(c => c[this.gridColumnIndex]))).sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        let gridValues = values.map(c => {
            return {
                name: Functions.formatValue(c, format),
                value: Functions.rawValue(c)
            }
        });

        return gridValues;
    }

    initChartOptions(): ChartOptions {
        return {
            responsive: this.responsive,
            maintainAspectRatio: false,
            scales: { 
                xAxes: [{
                    display: this.chartType.allowXAxis && this.config.showXAxis,
                    scaleLabel: {
                        display: this.config.showXAxisLabel,
                        labelString: this.config.xAxisLabel
                    },
                    ticks: {
                        min: this.config.autoScale ? undefined : this.config.xScaleMin,
                        max: this.config.autoScale ? undefined : this.config.xScaleMax
                    },
                    gridLines: {
                        display: true,
                        color: this.config.showGridLines ? 'LightGray' : 'transparent',
                        drawBorder: true,
                        zeroLineColor: 'black'
                    }
                }],
                yAxes: [{
                    display: this.chartType.allowYAxis && this.config.showYAxis,
                    scaleLabel: {
                        display: this.config.showYAxisLabel,
                        labelString: this.config.yAxisLabel
                    },
                    ticks: {
                        min: this.config.autoScale ? undefined : this.config.yScaleMin,
                        max: this.config.autoScale ? undefined : this.config.yScaleMax
                    },
                    gridLines: {
                        display: true,
                        color: this.config.showGridLines ? 'LightGray' : 'transparent',
                        drawBorder: true,
                        zeroLineColor: 'black'
                    }
                },
                {
                    id: 'right',
                    position: 'right',
                    display: this.chartType.allowYAxis && this.config.yAxisLabelRight,
                    scaleLabel: {
                        display: this.config.yAxisLabelRight ? true : false,
                        labelString: this.config.yAxisLabelRight
                    },
                    ticks: {
                        min: this.config.autoScale ? undefined : this.config.yScaleMin,
                        max: this.config.autoScale ? undefined : this.config.yScaleMax
                    },
                    gridLines: {
                        display: true,
                        color: this.config.showGridLines ? 'LightGray' : 'transparent',
                        drawBorder: true,
                        zeroLineColor: 'black'
                    }
                }
            ]
            },
            plugins: {
              datalabels: {
                formatter: (value, ctx) => {
                    let label = [];
                    if(this.config.showDataLabel) {
                        label.push(ctx.chart.data.labels[ctx.dataIndex]);
                    }
                    if (this.config.showDataValue) {
                        label.push(Functions.numberWithCommas(value));
                    }
                    return label.join('\n');
                  },
                anchor: <any> this.config.labelAnchor,
                align: <any> this.config.labelAlign,
              }
            },
            legend: { 
                display: this.config.showLegend, 
                position: <PositionType> this.config.legendPosition ?? 'top'
            },
            cutoutPercentage: this.config.cutOutPercentage
        };
    }

    updateChartOptions() {
        if (!this.chartOptions) {
            this.chartOptions = this.initChartOptions();
            return;
        }
        
        const chartOptions = this.chartOptions;

        chartOptions.scales.xAxes[0].display = this.chartType.allowXAxis && this.config.showXAxis;
        chartOptions.scales.xAxes[0].scaleLabel.display = this.config.showXAxisLabel;
        chartOptions.scales.xAxes[0].scaleLabel.labelString = this.config.xAxisLabel;
        chartOptions.scales.xAxes[0].ticks.min = this.config.xScaleMin;
        chartOptions.scales.xAxes[0].ticks.max = this.config.xScaleMax;
        chartOptions.scales.xAxes[0].gridLines.color = this.config.showGridLines ? 'LightGray' : 'transparent';

        chartOptions.scales.yAxes[0].display = this.chartType.allowYAxis && this.config.showYAxis;
        chartOptions.scales.yAxes[0].scaleLabel.display = this.config.showYAxisLabel;
        chartOptions.scales.yAxes[0].scaleLabel.labelString = this.config.yAxisLabel;
        chartOptions.scales.yAxes[0].ticks.min = this.config.autoScale ? undefined : this.config.yScaleMin;
        chartOptions.scales.yAxes[0].ticks.max = this.config.autoScale ? undefined : this.config.yScaleMax;
        chartOptions.scales.yAxes[0].gridLines.color = this.config.showGridLines ? 'LightGray' : 'transparent';

        chartOptions.scales.yAxes[1].display = this.chartType.allowYAxis && this.config.yAxisLabelRight;
        chartOptions.scales.yAxes[1].scaleLabel.display = this.config.showYAxisLabel;
        chartOptions.scales.yAxes[1].scaleLabel.labelString = this.config.yAxisLabelRight;
        chartOptions.scales.yAxes[1].ticks.min = this.config.autoScale ? undefined : this.config.yScaleMin;
        chartOptions.scales.yAxes[1].ticks.max = this.config.autoScale ? undefined : this.config.yScaleMax;
        chartOptions.scales.yAxes[1].gridLines.color = this.config.showGridLines ? 'LightGray' : 'transparent';

        chartOptions.plugins.datalabels.anchor = <any> this.config.labelAnchor;
        chartOptions.plugins.datalabels.align = <any> this.config.labelAlign;

        chartOptions.legend.display = this.config.showLegend;
        chartOptions.legend.position = <PositionType> this.config.legendPosition ?? 'top';

        chartOptions.cutoutPercentage = this.config.cutOutPercentage;

    }


    uniqueValues(data, index: number): any[] {
        const format = this.columns[index].format;
        const values = Array.from(new Set(data.map(c => c[index]))).sort((a, b) => {
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
                value: Functions.rawValue(c)
            }
        });
        return valuesSet;
    }

    formatValue(data, columnIndex: number, row: number): string|number {
        if (columnIndex === null || columnIndex < 0) {
            return row;
        }

        let value = data[row][columnIndex];
        let column = this.columns[columnIndex];

        return Functions.formatValue(value, column.format);
    }

    rawValue(data, columnIndex: number, row: number) {
        if (columnIndex === null) {
            return null;
        }

        let value = data[row][columnIndex];
    return Functions.rawValue(value);
    }

    // Version 4.0
    // https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
    pSBC(p, c0, c1, l) {
        let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a;

        if ( typeof(p) !== 'number' || p < -1 || p > 1 || typeof(c0) !== 'string' || (c0[0] !== 'r' && c0[0] !== '#') || ( c1 && !a )) {
            return null;
        }

        const pSBCr = (d) => {
            let n = d.length, x: any = {};
            if (n > 9) {
                [r, g, b, a] = d = d.split(','), n=d.length;
                if(n<3||n>4)return null;
                x.r=i(r[3]=='a'?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
            }else{
                if(n==8||n==6||n<4)return null;
                if(n<6)d='#'+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:'');
                d=i(d.slice(1),16);
                if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
                else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
            }
            return x
        };
        
        h=c0.length>9,h=a?c1.length>9?true:c1=='c'?!h:false:h,f=pSBCr(c0),P=p<0,t=c1&&c1!='c'?pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
        if(!f||!t)return null;
        if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
        else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);

        a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
        if(h)return'rgb'+(f?'a(':'(')+r+','+g+','+b+(f?','+m(a*1000)/1000:'')+')';
        else return'#'+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
    }

}
