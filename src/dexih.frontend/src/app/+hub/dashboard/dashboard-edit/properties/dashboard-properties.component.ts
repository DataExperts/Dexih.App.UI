import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { HubService } from '../../..';
import { HubFormsService } from '../../../hub.forms.service';
import { FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { eViewType, eSourceType, InputColumn, HubCache } from '../../../hub.models';
import { Subscription } from 'rxjs';
import { GridsterConfig, GridType, CompactType, DisplayGrid, GridsterItem, GridsterItemComponentInterface,
  GridsterComponent} from 'angular-gridster2';

@Component({
    selector: 'dashboard-properties',
    templateUrl: 'dashboard-properties.component.html',
})

export class DashboardPropertiesComponent implements OnInit, OnDestroy {
  @Input() showEdit = false;
  @Input() lock = true;

  @ViewChild('gridster', {static: true}) public gridster: GridsterComponent

    private _formChangeSubscription: Subscription;
    private _runTimeSubscription: Subscription;
    private _hubCacheSubscription: Subscription;

    eViewType = eViewType;
    eSourceType = eSourceType;

    public inputColumns: InputColumn[];

    public maximizedItem: FormGroup;

    columns: Array<any>;
    public data: Array<any>;

    public options: GridsterConfig;

    currentForm: FormGroup;
    dashboardItemControls: FormArray;

    hubCache: HubCache;

    constructor(
        private hubService: HubService,
        public formsService: HubFormsService) { }

    ngOnInit() {
      this.options = {
        gridType: GridType.ScrollVertical,
        compactType: CompactType.None,
        margin: 5,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        minCols: 12,
        maxCols: 100,
        minRows: 6,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 2,
        defaultItemRows: 2,
        fixedColWidth: 105,
        fixedRowHeight: 105,
        keepFixedHeightInMobile: false,
        keepFixedWidthInMobile: false,
        scrollSensitivity: 10,
        scrollSpeed: 20,
        enableEmptyCellClick: false,
        enableEmptyCellContextMenu: false,
        enableEmptyCellDrop: false,
        enableEmptyCellDrag: false,
        emptyCellDragMaxCols: 50,
        emptyCellDragMaxRows: 50,
        ignoreMarginInRow: false,
        // setGridSize: true,
        draggable: {
          enabled: false,
        },
        resizable: {
          enabled: false,
        },
        swap: false,
        pushItems: true,
        disablePushOnDrag: false,
        disablePushOnResize: false,
        pushDirections: {north: true, east: true, south: true, west: true},
        pushResizeItems: false,
        displayGrid: DisplayGrid.None,
        disableWindowResize: false,
        disableWarnings: false,
        scrollToNewItems: false,
        itemChangeCallback: (item, itemComponent: GridsterItemComponentInterface) => {
          this.itemResize(item, itemComponent);
        },
        itemResizeCallback: (item, itemComponent: GridsterItemComponentInterface) => {
          this.itemResize(item, itemComponent);
        },
        itemInitCallback: (item, itemComponent: GridsterItemComponentInterface) => {
          this.itemResize(item, itemComponent);
        },
      };

      this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
          if (hubCache.isLoaded()) {
            this.hubCache = hubCache;
          }
      });

      this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(currentForm => {
          this.currentForm = currentForm;
          if (currentForm) {
            this.dashboardItemControls = <FormArray> currentForm.controls.dexihDashboardItems;

            this.options.minCols = currentForm.controls.minCols.value;
            this.options.maxCols = currentForm.controls.maxCols.value;
            this.options.minRows = currentForm.controls.minRows.value;
            this.options.maxRows = currentForm.controls.maxRows.value;

            this.showEdit = currentForm.controls.runTime.value.showEdit;

            if (this._runTimeSubscription) { this._runTimeSubscription.unsubscribe(); }
            this._runTimeSubscription = currentForm.controls.runTime.valueChanges.subscribe(runTime => {
              this.showEdit = runTime.showEdit;
              this.lock = runTime.lock;

              this.updateShowEdit();
            });

            this.updateShowEdit();
          }
      });
    }

    ngOnDestroy(): void {
      if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
      if (this._runTimeSubscription) { this._runTimeSubscription.unsubscribe(); }
      if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

    public getNextPossiblePosition(): GridsterItem {
      let gridItem = {x: 0, y: 0, cols: 1, rows: 1, control: null};
      let newItem = this.gridster.getFirstPossiblePosition(gridItem);
      return newItem;
    }

    public updateShowEdit() {
      if (this.showEdit || !this.lock ) {
        this.options.displayGrid = DisplayGrid.Always;
        this.options.draggable.enabled = true;
        this.options.resizable.enabled = true;
      } else {
        this.options.displayGrid = DisplayGrid.None;
          this.options.draggable.enabled = false;
          this.options.resizable.enabled = false;
      }
      this.options = Object.assign({}, this.options);
    }

    public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
      function setWhenChanged(c: AbstractControl, value: Number) {
          if (c.value !== value) {
            c.setValue(value);
          }
      }

      let control = <FormGroup>item.control;

      setWhenChanged(control.controls.x, item.x);
      setWhenChanged(control.controls.y, item.y);
      setWhenChanged(control.controls.cols, item.cols);
      setWhenChanged(control.controls.rows, item.rows);

      let resizeEvent = item.control.controls.runTime.value.resizeEvent;
      if (itemComponent.width) {
        resizeEvent.emit([itemComponent.width, itemComponent.height]);
      }
    }

      removeItem(index) {
        let form = this.formsService.currentForm;
        let items = <FormArray> form.controls.dexihDashboardItems;
        items.removeAt(index);
      }

      updateGrid() {
        let currentForm = this.formsService.currentForm;
        this.options.minCols = currentForm.controls.minCols.value;
        this.options.maxCols = currentForm.controls.maxCols.value;
        this.options.minRows = currentForm.controls.minRows.value;
        this.options.maxRows = currentForm.controls.maxRows.value;
        this.options = Object.assign({}, this.options);
      }

      maximize(item) {
        if (this.maximizedItem) {
          this.maximizedItem = null;
        } else {
          this.maximizedItem = item;
        }
      }
}
