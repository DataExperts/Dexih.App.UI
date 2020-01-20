import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Observable, Observer, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import {DexihHubAuth, logoSmallUrl, eHubAccess} from '../../+auth/auth.models';
import { Router } from '@angular/router';
import { eSharedAccess, ePermission, DexihHub } from '../../shared/shared.models';

@Component({
  selector: 'hubs-summary',
  templateUrl: './hubs-summary.component.html',
})
export class HubsSummaryComponent implements OnInit {

  public hubs: Observable<DexihHubAuth[]>;

  public filterString: string;

  logoSmallUrl = logoSmallUrl;
  eSharedAccess = eSharedAccess;
  ePermission = ePermission;
  eHubAccess = eHubAccess;

  public view = eHubAccess.User;
  public hubAccess = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.hubs = this.authService.getHubsObservable();
  }
}


