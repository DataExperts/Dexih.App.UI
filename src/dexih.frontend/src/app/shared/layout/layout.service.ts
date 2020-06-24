import {Component, OnInit, Injectable, HostListener} from '@angular/core';
import {AuthService} from '../../+auth/auth.service';
import {Observable, Subscription, BehaviorSubject, combineLatest, fromEvent} from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';


const store = {
  shortcutOpen: false,
  isMobile: 	(/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
  device: '',
  mobileViewActivated: false,
  menuCollapsed: false,
  menuIsOpen: false
};

@Injectable()
export class LayoutService {

  isActivated: boolean;
  store: any;
  private subject: BehaviorSubject<any>;

  trigger() {
    this.subject.next(this.store)
  }

  subscribe(next, err?, complete?): Subscription {
    return this.subject.subscribe(next, err, complete)
  }

  constructor(
    private authService: AuthService
  ) {
    this.subject = new BehaviorSubject<any>(store);
    this.store = store;
    this.resizeUpdate();

    fromEvent(window, 'resize').pipe(debounceTime(100), map(() => {
      this.resizeUpdate();
      this.trigger();
    })).subscribe();
  }

  resizeUpdate() {
    this.store.mobileViewActivated = window.innerWidth < 992;
    this.store.menuCollapsed = window.innerWidth < 1200;
  }

  hideMenu() {
    this.store.menuIsOpen = false;
    if (this.store.mobileViewActivated) {
      this.store.menuCollapsed = true;
    }
    this.trigger();
  }

  onShowMenu() {
    this.store.menuIsOpen = true;
    this.trigger();
  }

  onCollapseMenu() {
    this.store.menuCollapsed = !this.store.menuCollapsed;
    this.trigger();
  }

  menuCollapsed(): boolean {
    return this.store.menuCollapsed;
  }

  onShortcutToggle(condition?: any) {
    if (!condition) {
      this.store.shortcutOpen = !this.store.shortcutOpen;
    } else {
      this.store.shortcutOpen = !!condition;
    }

    this.trigger();
  }
}
