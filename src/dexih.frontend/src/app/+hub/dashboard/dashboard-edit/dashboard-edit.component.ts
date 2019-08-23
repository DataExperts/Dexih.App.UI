import { Component, OnInit, OnDestroy, HostListener, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubCache, eCacheStatus, DexihDashboard, DexihDashboardItem, DataCache, DexihView } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { FormArray, FormGroup } from '@angular/forms';
import { DashboardItemComponent } from './item/dashboard-item.component';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'dexih-dashboard-edit-form',
  templateUrl: './dashboard-edit.component.html',
  providers: [HubFormsService]
})
export class DashboardEditComponent implements OnInit, OnDestroy {
  @ViewChildren('dashboardItem') dashboardItems: QueryList<DashboardItemComponent>;

  public dashboardKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private isLoaded = false;

  public isRefreshing = false;
  private refreshComplete = false;

  views: DexihView[];

  constructor(
    private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
        this.hubService.getRemoteAgentObservable()
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];
        let remoteAgent = result[3];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded) { return; }

        if (!this.isLoaded) {
          this.isLoaded = true;

          this.views = this.hubCache.hub.dexihViews;

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.dashboardKey = + params['dashboardKey'];

            if (!this.dashboardKey) {
              this.hubService.addHubErrorMessage('There was no dashboard specified to edit.');
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihColumnValidations) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {
                let dashboard = this.hubCache.hub.dexihDashboards.find(c => c.key === this.dashboardKey);

                // create a copy of the dashboard to avoid changes to the hub cache.
                dashboard = JSON.parse(JSON.stringify(dashboard));
                this.formsService.dashboard(dashboard);
              }
            }
          }

          if (this.action === 'new') {
            this.refreshComplete = true;
            let dashboard = new DexihDashboard();
            this.formsService.dashboard(dashboard);
            let runTime = this.formsService.currentForm.controls.runTime.value;
            runTime.showEdit = true;
            this.formsService.currentForm.controls.runTime.setValue(runTime);
            // this.add();

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/dashboard-new', `/dashboard-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }
        }

        if (this.formsService.currentForm.controls.autoRefresh.value && remoteAgent && !this.refreshComplete) {
            this.refreshComplete = true;
            this.refresh();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Dashboard Edit');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
  }

  close() {
    this.authService.navigateUp();
  }


  // add() {
  //   let form = this.formsService.currentForm;
  //   let items = <FormArray> form.controls.dexihDashboardItems;
  //   let item = new DexihDashboardItem();
  //   item.cols = 1;
  //   item.rows = 1;
  //   item.x = 0;
  //   item.y = 0;
  //   let control = this.formsService.dashboardItem(item);
  //   items.push(control);
  // }

  refresh() {
    this.hubService.previewDashboard(this.formsService.currentForm.value, this.formsService.currentForm.value.parameters).then(urls => {
      let items = <FormArray> this.formsService.currentForm.controls.dexihDashboardItems;

      urls.forEach(url => {
        let item = <FormGroup> items.controls.find((form: FormGroup) => form.controls.key.value === url.dashboardItemKey);
        if (item) {
          let data = <DataCache> item.controls.runTime.value.data;
          data.refresh(this.hubService.downloadUrlData(url.downloadUrl));
        }
      });
    });
  }

  public toggleEdit() {
    let runTime = this.formsService.currentForm.controls.runTime.value;
    runTime.showEdit = !runTime.showEdit;
    this.formsService.currentForm.controls.runTime.setValue(runTime);
  }

  public toggleLock() {
    let runTime = this.formsService.currentForm.controls.runTime.value;
    runTime.lock = !runTime.lock;
    this.formsService.currentForm.controls.runTime.setValue(runTime);
  }

  add(viewKey) {
    let view = this.hubCache.hub.dexihViews.find(c => c.key === viewKey);
    if (!view) { return; }
    let form = this.formsService.currentForm;
    let items = <FormArray> form.controls.dexihDashboardItems;
    let item = new DexihDashboardItem();
    item.key = this.hubCache.getNextSequence();

    item.cols = 1;
    item.rows = 1;
    item.x = -1;
    item.y = -1;

    // look for an empty cell
    found:
    for (let col = 0; col < form.controls.maxCols.value; col++) {
      for (let row = 0; row < form.controls.maxRows.value; row++) {
        let occupied = false;
        for (let i = 0; i < items.controls.length; i++) {
          let currentItem = <DexihDashboardItem> items.controls[i].value;
          if (currentItem.x <= col && (currentItem.x + currentItem.cols) > col &&
            currentItem.y <= row && (currentItem.y + currentItem.rows) > row) {
              occupied = true;
              break;
          }
        }

        if (!occupied) {
          item.x = col;
          item.y = row;

          break found;
        }
      }
    }
    item.viewKey = viewKey;
    item.name = view.name;
    let control = this.formsService.dashboardItem(item);
    items.push(control);
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The dashboard has not been saved',
          'The dashboard changes have not been saved.  Do you want to discard the changes and exit?')
          .then((confirm) => {
              resolve(confirm);
            }).catch(() => {
              resolve(false);
            });
      } else {
        resolve(true);
      }
    });
  }

  // @HostListener allows is to guard against browser refresh, close, etc.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.formsService.hasChanged) {
      $event.returnValue = 'The dashboard changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
