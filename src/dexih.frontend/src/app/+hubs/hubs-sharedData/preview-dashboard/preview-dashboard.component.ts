import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage/index';
import { HubsService} from '../../hubs.service';
import { CancelToken } from '../../../+auth/auth.models';
import { InputColumn, DexihColumnBase, eDownloadFormat, SharedData, DexihDashboard, DexihActiveAgent, DexihDashboardItem } from '../../../shared/shared.models';
import { GridsterConfig, GridType, CompactType, DisplayGrid, GridsterItemComponentInterface, GridsterItem } from 'angular-gridster2';
import { PreviewResults } from '../../../+hub/hub.models';
import { AbstractControl } from '@angular/forms';

@Component({

    selector: 'preview-dashboard',
    templateUrl: './preview-dashboard.component.html'
})
export class PreviewDashboardComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    private _subscription: Subscription;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public name = 'loading...';


    dashboardKey: number;
    hubKey: number;

    dashboard: DexihDashboard = null;
    activeAgent: DexihActiveAgent;
    maximizedItem: DexihDashboardItem;

    public options: GridsterConfig;


    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private hubsService: HubsService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.hubsService.getSharedDataIndex('', [], 50, false)
            ).subscribe(result => {
                let params = result[0];

                this.hubKey = +params['hubKey'];
                this.dashboardKey = +params['dashboardKey'];

                this.refresh();
            });
        } catch (e) {
            this.dexihMessage.addMessage(e);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    refresh() {
        this.hubsService.getDashboard(this.hubKey, this.dashboardKey).then((dashboard) => {
            this.setOptions(dashboard);
            this.dashboard = dashboard;
            this.name = dashboard.name;

            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
                this.dashboard = null;
            });
    }

    private setOptions(dashboard: DexihDashboard) {
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
            minCols: dashboard.minCols,
            maxCols: dashboard.maxCols,
            minRows: dashboard.minRows,
            maxRows: dashboard.maxRows,
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
    }

    maximize(item) {
        if (this.maximizedItem) {
          this.maximizedItem = null;
        } else {
          this.maximizedItem = item;
        }
      }

      public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
        // function setWhenChanged(c: AbstractControl, value: Number) {
        //     if (c.value !== value) {
        //       c.setValue(value);
        //     }
        // }
  
        // let control = <FormGroup>item.control;
  
        // setWhenChanged(control.controls.x, item.x);
        // setWhenChanged(control.controls.y, item.y);
        // setWhenChanged(control.controls.cols, item.cols);
        // setWhenChanged(control.controls.rows, item.rows);
  
        // let resizeEvent = item.control.controls.runTime.value.resizeEvent;
        // if (itemComponent.width) {
        //   resizeEvent.emit([itemComponent.width, itemComponent.height]);
        // }
      }

    // downloadData(format: eDownloadFormat) {
    //     let sharedData = new SharedData();
    //     sharedData.objectKey = this.dashboardKey;
    //     sharedData.objectType = this.objectType;
    //     sharedData.hubKey = this.hubKey;
    //     sharedData.inputColumns = this.inputColumns;
    //     sharedData.query = this.selectQuery;

    //     this.hubsService.downloadData([sharedData], true, format, this.cancelToken).then(() => {
    //         this.dexihMessage.addSuccessMessage('The download task has started.');
    //     }).catch(reason => {
    //         this.dexihMessage.addMessage(reason);
    //     });
    // }
}
