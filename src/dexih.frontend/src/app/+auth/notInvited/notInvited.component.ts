import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {logoUrl} from '../auth.models';
import { Subscription, combineLatest} from 'rxjs';

@Component({
  selector: 'app-notInvited',
  templateUrl: './notInvited.component.html',
  styleUrls: ['../auth.component.scss']

})
export class NotInvitedComponent implements OnInit, OnDestroy {
  private _queryParamSubscription: Subscription;

  logoUrl = logoUrl;
  email: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this._queryParamSubscription = this.route.queryParams.subscribe((params) => {
        this.email = params['email'];
      });
  }

  ngOnDestroy() {
    if (this._queryParamSubscription) { this._queryParamSubscription.unsubscribe(); }
  }

}
