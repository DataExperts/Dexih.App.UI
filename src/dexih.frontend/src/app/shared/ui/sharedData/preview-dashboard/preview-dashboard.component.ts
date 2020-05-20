import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest, Subject} from 'rxjs';
import { DexihMessageComponent } from '../../../../shared/ui/dexihMessage/index';
import { CancelToken } from '../../../../+auth/auth.models';
import { InputColumn, DexihColumnBase, DexihDashboard,
    DexihActiveAgent, InputParameterBase, eDataObjectType } from '../../../shared.models';
import { GridsterConfig, GridType, CompactType, DisplayGrid, GridsterItem, GridsterItemComponent } from 'angular-gridster2';

@Component({

    selector: 'preview-dashboard',
    templateUrl: './preview-dashboard.component.html',
    styleUrls: ['./preview-dashboard.component.scss']
})
export class PreviewDashboardComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    private _subscription: Subscription;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    private refreshDataSubject: Subject<void> = new Subject<void>();

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public name = 'loading...';

    dashboardKey: number;
    hubKey: number;
    eDataObjectType = eDataObjectType;

    dashboard: DexihDashboard = null;
    activeAgent: DexihActiveAgent;
    maximizedIndex: number;

    public options: GridsterConfig;
    public parameters: InputParameterBase[];

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.authService.getSharedDataIndex('', [], 50, false)
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

    parameterChange() {
        this.refresh();
    }

    refresh() {
        this.authService.getDashboard(this.hubKey, this.dashboardKey).then((dashboard) => {
            this.refreshDataSubject.next();

            this.setOptions(dashboard);
            this.dashboard = dashboard;
            this.name = dashboard.name;
            if (!this.parameters) {
                this.parameters = dashboard.parameters;
            }

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
            itemChangeCallback: (item, itemComponent: GridsterItemComponent) => {
            this.itemResize(item, itemComponent);
            },
            itemResizeCallback: (item, itemComponent: GridsterItemComponent) => {
            this.itemResize(item, itemComponent);
            },
            itemInitCallback: (item, itemComponent: GridsterItemComponent) => {
            this.itemResize(item, itemComponent);
            },
          };
    }

    maximize(isMaximized: boolean, index: number) {
        if (isMaximized) {
            this.maximizedIndex = index;
        } else {
            this.maximizedIndex = -1;
        }
      }

      public itemResize(item: GridsterItem, itemComponent: GridsterItemComponent) {
        // console.debug(`top: ${itemComponent.el.clientTop}, left: ${itemComponent.el.clientLeft},
        // width: ${itemComponent.el.clientWidth}, height: ${itemComponent.el.clientHeight}`)
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

    edit() {
        this.router.navigate(['hub', this.hubKey, 'dashboards', 'dashboard-edit', this.dashboardKey]);
    }
}
