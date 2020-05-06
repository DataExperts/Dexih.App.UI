import { eChartType } from "../../shared.models"

export enum eInputFormat {
    SingleSeries,
    MultiSeries,
    InverseSeries,
    Xy,
    XyMinMax,
    XyBubble,
    GeoCoordinates
}

export const inputFormats = [
{key: eInputFormat.SingleSeries, allowLabel: true, maxSeries: 1, allowYSeries: false,
    allowMinMax: false, allowBubble: false, inverse: false },
{key: eInputFormat.MultiSeries, allowLabel: true, maxSeries: 10, allowYSeries: false,
    allowMinMax: false, allowBubble: false, inverse: false },
{key: eInputFormat.InverseSeries, allowLabel: true, maxSeries: 10, allowYSeries: false,
    allowMinMax: false, allowBubble: false, inverse: true },
{key: eInputFormat.Xy, allowLabel: false, maxSeries: 1, allowYSeries: true,
    allowMinMax: false, allowBubble: false, inverse: false },
{key: eInputFormat.XyMinMax, allowLabel: false, maxSeries: 1, allowYSeries: true,
    allowMinMax: true, allowBubble: false, inverse: false },
{key: eInputFormat.XyBubble, allowLabel: false, maxSeries: 1, allowYSeries: true,
    allowMinMax: false, allowBubble: true, inverse: false },
]

export const ChartTypes = [
    {
        name: 'Bar Charts',
        charts: [
            {
                key: eChartType.BarVertical, name: 'Vertical Bar Chart',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarHorizontal, name: 'Horizontal Bar Chart',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: true,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarVertical2D, name: 'Vertical Bar Chart (MultiSeries)',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarHorizontal2D, name: 'Horizontal Bar Chart (MultiSeries)',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: true,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarVerticalStacked, name: 'Vertical Stacked Bar Chart',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarHorizontalStacked, name: 'Horizontal Stacked Bar Chart',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: true,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarVerticalNormalized, name: 'Vertical Normalized Bar Chart',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.BarHorizontalNormalized, name: 'Horizontal Normalized Bar Chart',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: true,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
        ]
    },
    {
        name: 'Pie Charts',
        charts: [
            {
                key: eChartType.Pie, name: 'Pie Chart',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: true,
                allowExplodeSlices: true,
                allowDoughnut: true,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.PieAdvanced, name: 'Pie Chart (Advanced)',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: false,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.PieGrid, name: 'Pie Chart (Grid)',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: false,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
        ]
    },
    {
        name: 'Line/Area Charts',
        charts: [
            {
                key: eChartType.Line, name: 'Line Chart',
                inputFormat: eInputFormat.InverseSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Area, name: 'Area Chart',
                inputFormat: eInputFormat.InverseSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Polar, name: 'Polar Chart',
                inputFormat: eInputFormat.InverseSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.AreaStacked, name: 'Area Stacked Chart',
                inputFormat: eInputFormat.InverseSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.AreaNormalized, name: 'Area Normalized Chart',
                inputFormat: eInputFormat.InverseSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
        ]
    },
    {
        name: 'X-Y Charts',
        charts: [
            {
                key: eChartType.Scatter, name: 'X-Y Scatter Chart',
                inputFormat: eInputFormat.Xy,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Error, name: 'X-Y Error Chart',
                inputFormat: eInputFormat.XyMinMax,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Bubble, name: 'X-Y Bubble Chart',
                inputFormat: eInputFormat.XyBubble,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: true,
                allowYScaleMax: true,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
        ]
    },
    {
        name: 'Other Charts',
        charts: [
            {
                key: eChartType.HeatMap, name: 'Heat Map',
                inputFormat: eInputFormat.MultiSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: true,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: false,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'flame',
                defaultShowLegend: true
            },
            {
                key: eChartType.TreeMap, name: 'Tree Map',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: true,
                allowLegend: false,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: true,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Cards, name: 'Number Cards',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: false,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },
            {
                key: eChartType.Gauge, name: 'Gauge',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: false,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: true
            },
            {
                key: eChartType.LinearGauge, name: 'Linear Gauge',
                inputFormat: eInputFormat.SingleSeries,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: true,
                allowXAxis: true,
                allowYAxis: false,
                allowXScaleMin: true,
                allowXScaleMax: true,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: true,
                defaultShowYAxisLabel: true,
                defaultShowXAxis: true,
                defaultShowYAxis: true,
                defaultShowGridLines: true,
                defaultColorScheme: 'natural',
                defaultShowLegend: true
            },
            {
                key: eChartType.Map, name: 'Google Map',
                inputFormat: eInputFormat.GeoCoordinates,
                isHorizontal: false,
                allowGradient: false,
                allowLegend: false,
                allowXAxis: false,
                allowYAxis: false,
                allowXScaleMin: false,
                allowXScaleMax: false,
                allowYScaleMin: false,
                allowYScaleMax: false,
                allowLabels: false,
                allowExplodeSlices: false,
                allowDoughnut: false,
                allowGridLines: false,
                defaultShowXAxisLabel: false,
                defaultShowYAxisLabel: false,
                defaultShowXAxis: false,
                defaultShowYAxis: false,
                defaultShowGridLines: false,
                defaultColorScheme: 'natural',
                defaultShowLegend: false
            },

        ]
    }
]
