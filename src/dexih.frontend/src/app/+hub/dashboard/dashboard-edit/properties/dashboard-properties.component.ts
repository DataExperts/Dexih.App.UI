import { Component, OnInit, ViewChildren, QueryList, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../..';
import { HubFormsService } from '../../../hub.forms.service';
import { FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { DexihDashboardItem, eViewType, eSourceType, InputColumn } from '../../../hub.models';
import { Subscription } from 'rxjs';
import { GridsterConfig, GridType, CompactType, DisplayGrid, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { DashboardItemComponent } from '../item/dashboard-item.component';

@Component({
    selector: 'dashboard-properties',
    templateUrl: 'dashboard-properties.component.html',
})

export class DashboardPropertiesComponent implements OnInit, OnDestroy {
  @Input() showEdit = false;

  @ViewChildren('dashboardItems') dashboardItems: QueryList<DashboardItemComponent>;
  @ViewChildren('gridsterItem') gridsterItems: any;

    private _formChangeSubscription: Subscription;
    private _runTimeSubscription: Subscription;

    eViewType = eViewType;
    eSourceType = eSourceType;

    public inputColumns: InputColumn[];

    columns: Array<any>;
    public data: Array<any>;

    public options: GridsterConfig;

    currentForm: FormGroup;
    dashboardItemControls: FormArray;

    constructor(
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

      this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(currentForm => {
          this.currentForm = currentForm;
          if (currentForm) {
            this.dashboardItemControls = <FormArray> currentForm.controls.dexihDashboardItems;

            this.options.minCols = currentForm.controls.minCols.value;
            this.options.maxCols = currentForm.controls.maxCols.value;
            this.options.minRows = currentForm.controls.minRows.value;
            this.options.maxRows = currentForm.controls.maxRows.value;

            if (this._runTimeSubscription) { this._runTimeSubscription.unsubscribe(); }
            this._runTimeSubscription = currentForm.controls.runTime.valueChanges.subscribe(runTime => {
              this.showEdit = runTime.showEdit;

              if (this.showEdit) {
                this.options.displayGrid = DisplayGrid.Always;
                this.options.draggable.enabled = true;
                this.options.resizable.enabled = true;
              } else {
                this.options.displayGrid = DisplayGrid.None;
                this.options.draggable.enabled = false;
                this.options.resizable.enabled = false;
              }

              this.updateShowEdit();
            });

            this.updateShowEdit();
          }
      });
    }

    ngOnDestroy(): void {
      if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
      if (this._runTimeSubscription) { this._runTimeSubscription.unsubscribe(); }
    }

    public updateShowEdit() {
      if (this.showEdit) {
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

      refresh() {
        this.dashboardItems.forEach(item => {
          item.refresh();
        });
      }

      updateGrid() {
        let currentForm = this.formsService.currentForm;
        this.options.minCols = currentForm.controls.minCols.value;
        this.options.maxCols = currentForm.controls.maxCols.value;
        this.options.minRows = currentForm.controls.minRows.value;
        this.options.maxRows = currentForm.controls.maxRows.value;
        this.options = Object.assign({}, this.options);
      }

      add() {
        let form = this.formsService.currentForm;
        let items = <FormArray> form.controls.dexihDashboardItems;
        let item = new DexihDashboardItem();
        item.cols = 1;
        item.rows = 1;
        item.x = 0;
        item.y = 0;
        let control = this.formsService.dashboardItem(item);
        items.push(control);
      }
}
