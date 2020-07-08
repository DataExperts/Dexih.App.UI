import {
    Component,
    Input,
    ViewEncapsulation,
    Output,
    EventEmitter,
    ViewChild,
    HostListener,
    ContentChild,
    TemplateRef
  } from '@angular/core';
  
  import { curveLinear } from 'd3-shape';
  import { scaleBand, scaleLinear, scalePoint, scaleTime } from 'd3-scale';
  import {
    BaseChartComponent,
    LineSeriesComponent,
    ViewDimensions,
    ColorHelper,
    calculateViewDimensions
  } from '@swimlane/ngx-charts';
  
  @Component({
    // tslint:disable-next-line: component-selector
    selector: 'combo-chart-component',
    templateUrl: './combo-chart.component.html',
    styleUrls: ['./combo-chart.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class ComboChartComponent extends BaseChartComponent {
    @Input() curve: any = curveLinear;
    @Input() legend = false;
    @Input() legendTitle: string = 'Legend';
    @Input() legendPosition: string = 'right';
    @Input() xAxis;
    @Input() yAxis;
    @Input() showXAxisLabel;
    @Input() showYAxisLabel;
    @Input() showRightYAxisLabel;
    @Input() xAxisLabel;
    @Input() yAxisLabel;
    @Input() yAxisLabelRight;
    @Input() yScaleMax;
    @Input() tooltipDisabled: boolean = false;
    @Input() gradient: boolean;
    @Input() showGridLines: boolean = true;
    @Input() activeEntries: any[] = [];
    @Input() schemeType: string;
    @Input() xAxisTickFormatting: any;
    @Input() yAxisTickFormatting: any;
    @Input() yRightAxisTickFormatting: any;
    @Input() roundDomains: boolean = false;
    @Input() colorSchemeLine = 'fire';
    @Input() autoScale;
    @Input() lineChart: any;
    @Input() yLeftAxisScaleFactor: any;
    @Input() yRightAxisScaleFactor: any;
    @Input() rangeFillOpacity: number;
    @Input() animations: boolean = true;
    @Input() noBarWhenZero: boolean = true;
    @Input() roundEdges: boolean = false;
    @Input() barPadding = 3;
    @Input() separateAxis = false; // seprate axis for bar/series
    @Input() showDataLabel = false;
    @Input() dataLabelFormatting;
  
    @Output() activate: EventEmitter<any> = new EventEmitter();
    @Output() deactivate: EventEmitter<any> = new EventEmitter();
  
    @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;
    @ContentChild('seriesTooltipTemplate') seriesTooltipTemplate: TemplateRef<any>;
  
    @ViewChild(LineSeriesComponent) lineSeriesComponent: LineSeriesComponent;
  
    dims: ViewDimensions;
    xScale: any;
    yScale: any;
    xDomain: any;
    yDomain: any;
    transform: string;
    colors: ColorHelper;
    colorsLine: ColorHelper;
    margin: any[] = [10, 20, 10, 20];
    xAxisHeight: number = 0;
    yAxisWidth: number = 0;
    legendOptions: any;
    scaleType = 'linear';
    xScaleLine;
    yScaleLine;
    xDomainLine;
    yDomainLine;
    seriesDomain;
    scaledAxis;
    combinedSeries;
    xSet;
    filteredDomain;
    hoveredVertical;
    yOrientLeft = 'left';
    yOrientRight = 'right';
    legendSpacing = 0;
    bandwidth;
    // barPadding = 8;
  
    trackBy(index, item): string {
      return item.name;
    }
  
    update(): void {
      super.update();
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showXAxis: this.xAxis,
        showYAxis: this.yAxis,
        xAxisHeight: this.xAxisHeight,
        yAxisWidth: this.yAxisWidth,
        showXLabel: this.showXAxisLabel,
        showYLabel: this.showYAxisLabel,
        showLegend: this.legend,
        legendType: this.schemeType,
        legendPosition: this.legendPosition
      });
  
      if (!this.yAxis) {
        // this.legendSpacing = 0;
      } else if (this.showYAxisLabel && this.separateAxis && this.yAxis) {
        // this.legendSpacing = 100;
        this.dims.width -= 70;
      } else {
        // this.legendSpacing = 40;
        this.dims.width -= 40;
      }
      this.xScale = this.getXScale();
      this.yScale = this.getYScale();
  
      if (this.lineChart) {
        // line chart
        this.xDomainLine = this.getXDomainLine();
        if (this.filteredDomain) {
          this.xDomainLine = this.filteredDomain;
        }
    
        this.yDomainLine = this.getYDomainLine();
        this.scaleLines();
      }

      this.seriesDomain = this.getSeriesDomain();

      this.setColors();
      this.legendOptions = this.getLegendOptions();
  
      this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
  
    deactivateAll() {
      this.activeEntries = [...this.activeEntries];
      for (const entry of this.activeEntries) {
        this.deactivate.emit({ value: entry, entries: [] });
      }
      this.activeEntries = [];
    }
  
    @HostListener('mouseleave')
    hideCircles(): void {
      this.hoveredVertical = null;
      this.deactivateAll();
    }
  
    updateHoveredVertical(item): void {
      this.hoveredVertical = item.value;
      this.deactivateAll();
    }
  
    updateDomain(domain): void {
      this.filteredDomain = domain;
      this.xDomainLine = this.filteredDomain;
      this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
    }
  
    scaleLines() {
      if (!this.lineChart) { return; }

      if (this.separateAxis) {
        this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
      } else {
        this.xScaleLine = this.xScale;
        this.yScaleLine = this.yScale;
      }
    }
  
    getSeriesDomain(): any[] {
      if (this.lineChart) {
        this.combinedSeries = this.lineChart.slice(0);
      } else {
        this.combinedSeries = [];
      }
      
      this.combinedSeries.push({
        name: this.yAxisLabel,
        series: this.results
      });
      return this.combinedSeries.map(d => d.name);
    }
  
    isDate(value): boolean {
      if (value instanceof Date) {
        return true;
      }
  
      return false;
    }
  
    getScaleType(values): string {
      let date = true;
      let num = true;
  
      for (const value of values) {
        if (!this.isDate(value)) {
          date = false;
        }
  
        if (typeof value !== 'number') {
          num = false;
        }
      }
  
      if (date) return 'time';
      if (num) return 'linear';
      return 'ordinal';
    }
  
    getXDomainLine(): any[] {
      let values = [];

      for (const results of this.lineChart) {
        for (const d of results.series) {
          if (!values.includes(d.name)) {
            values.push(d.name);
          }
        }
      }
  
      this.scaleType = this.getScaleType(values);
      let domain = [];
  
      if (this.scaleType === 'time') {
        const min = Math.min(...values);
        const max = Math.max(...values);
        domain = [min, max];
      } else if (this.scaleType === 'linear') {
        values = values.map(v => Number(v));
        const min = Math.min(...values);
        const max = Math.max(...values);
        domain = [min, max];
      } else {
        domain = values;
      }
  
      this.xSet = values;
      return domain;
    }
  
    getYDomainLine(): any[] {
      const domain = [];
  
      for (const results of this.lineChart) {
        for (const d of results.series) {
          if (domain.indexOf(d.value) < 0) {
            domain.push(d.value);
          }
          if (d.min !== undefined) {
            if (domain.indexOf(d.min) < 0) {
              domain.push(d.min);
            }
          }
          if (d.max !== undefined) {
            if (domain.indexOf(d.max) < 0) {
              domain.push(d.max);
            }
          }
        }
      }
  
      let min = Math.min(...domain);
      const max = Math.max(...domain);
      if (this.yRightAxisScaleFactor) {
        const minMax = this.yRightAxisScaleFactor(min, max);
        return [Math.min(0, minMax.min), minMax.max];
      } else {
        min = Math.min(0, min);
        return [min, max];
      }
    }
  
    getXScaleLine(domain, width): any {
      let scale;
      if (this.bandwidth === undefined) {
        this.bandwidth = width - this.barPadding;
      }
      const offset = Math.floor((width + this.barPadding - (this.bandwidth + this.barPadding) * domain.length) / 2);
  
      if (this.scaleType === 'time') {
        scale = scaleTime().range([0, width]).domain(domain);
      } else if (this.scaleType === 'linear') {
        scale = scaleLinear().range([0, width]).domain(domain);
  
        if (this.roundDomains) {
          scale = scale.nice();
        }
      } else if (this.scaleType === 'ordinal') {
        scale = scalePoint()
          .range([offset + this.bandwidth / 2, width - offset - this.bandwidth / 2])
          .domain(domain);
      }
  
      return scale;
    }
  
    getYScaleLine(domain, height): any {
      const scale = scaleLinear().range([height, 0]).domain(domain);
  
      return this.roundDomains ? scale.nice() : scale;
    }
  
    getXScale(): any {
      this.xDomain = this.getXDomain();
      const spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
      return scaleBand().range([0, this.dims.width]).paddingInner(spacing).domain(this.xDomain);
    }
  
    getYScale(): any {
      this.yDomain = this.getYDomain();
      if ( this.yScaleMax ) {
        this.yDomain[1] = this.yScaleMax;
      }
      const scale = scaleLinear().range([this.dims.height, 0]).domain(this.yDomain);
      return this.roundDomains ? scale.nice() : scale;
    }
  
    getXDomain(): any[] {
      return this.results.map(d => d.name);
    }
  
    getYDomain() {
      const values = this.results.map(d => d.value);
      let min = Math.min(0, ...values);
      let max = Math.max(...values);

      // if we are not using a separate axis for series, check the series values for min/max
      if (!this.separateAxis && this.lineChart) {
        let yDomainLine = this.getYDomainLine();
        if (min > yDomainLine[0]) { min = yDomainLine[0]; }
        if (max < yDomainLine[1]) { max = yDomainLine[1]; }
      }

      if (this.yLeftAxisScaleFactor) {
        const minMax = this.yLeftAxisScaleFactor(min, max);
        return [Math.min(0, minMax.min), minMax.max];
      } else {
        return [min, max];
      }
    }
  
    onClick(data) {
      this.select.emit(data);
    }
  
    setColors(): void {
      let domain;
      if (this.schemeType === 'ordinal') {
        domain = this.xDomain;
      } else {
        domain = this.yDomain;
      }
      this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);

      if (this.seriesDomain) {
        this.colorsLine = new ColorHelper(this.colorSchemeLine, this.schemeType, this.seriesDomain, this.customColors);
      }
    }
  
    getLegendOptions() {
      const opts = {
        scaleType: this.schemeType,
        colors: undefined,
        domain: [],
        title: undefined,
        position: this.legendPosition
      };
      if (opts.scaleType === 'ordinal') {
        opts.domain = this.seriesDomain;
        opts.colors = this.colorsLine;
        opts.title = this.legendTitle;
      } else {
        opts.domain = this.seriesDomain;
        opts.colors = this.colors.scale;
      }
      return opts;
    }
  
    updateLineWidth(width): void {
      this.bandwidth = width;
      this.scaleLines();
    }
  
    updateYAxisWidth({ width }): void {
      this.yAxisWidth = width + 20;
      this.update();
    }
  
    updateXAxisHeight({ height }): void {
      this.xAxisHeight = height;
      this.update();
    }
  
    onActivate(item) {
      const idx = this.activeEntries.findIndex(d => {
        return d.name === item.name && d.value === item.value && d.series === item.series;
      });
      if (idx > -1) {
        return;
      }
  
      this.activeEntries = [item, ...this.activeEntries];
      this.activate.emit({ value: item, entries: this.activeEntries });
    }
  
    onDeactivate(item) {
      const idx = this.activeEntries.findIndex(d => {
        return d.name === item.name && d.value === item.value && d.series === item.series;
      });
  
      this.activeEntries.splice(idx, 1);
      this.activeEntries = [...this.activeEntries];
  
      this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
  }
  