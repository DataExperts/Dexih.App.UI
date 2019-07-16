import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Subscription, combineLatest} from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  // animation moves sidebar -250 left, and main -250 left, whilst increasing the main margin by 250
  // to keep everything aligned.
  animations: [
    trigger('sidebar', [
      state('in', style({
        transform: 'translate(-250px, 0)'
      })),
      state('out', style({
        transform: 'translate(0, 0)'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
    trigger('main', [
      state('in', style({
        transform: 'translate(0px, 0)'
      })),
      state('out', style({
        transform: 'translate(250px, 0)', 'margin-right': '250px'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
  ]
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  _layoutSubscription: Subscription;

  collapsed = false;
  mobileViewActivated = false;
  sidebarState = 'out';
  mainState = 'out';

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() {
    this._layoutSubscription = this.layoutService.subscribe(store => {
      this.collapsed = store.menuCollapsed;
      this.mobileViewActivated = store.mobileViewActivated;

      if (this.collapsed) {
        this.sidebarState = 'in';
        this.mainState = 'in';
      } else {
        this.sidebarState = 'out';
        this.mainState = this.mobileViewActivated ? 'in' : 'out';
      }
    });
  }

  ngOnDestroy() {
    if (this._layoutSubscription) { this._layoutSubscription.unsubscribe(); }
  }

}
