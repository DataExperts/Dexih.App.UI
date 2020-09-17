import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {logoUrl} from '../auth.models';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LockedComponent implements OnInit, OnDestroy {
  private _queryParamSubscription: Subscription;

  logoUrl = logoUrl;
  email: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this._queryParamSubscription = this.route.queryParams.subscribe((queryParams) => {
        this.email = queryParams['email'];
      });
  }

  ngOnDestroy() {
    if (this._queryParamSubscription) { this._queryParamSubscription.unsubscribe(); }
  }

  unlock() {
    alert('This function is not available.');
  }
}
