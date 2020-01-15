import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Observable, Observer, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import {DexihHubAuth, logoSmallUrl} from '../../+auth/auth.models';
import { Router } from '@angular/router';
import { eSharedAccess } from '../../shared/shared.models';

@Component({
  selector: 'hubs-summary',
  templateUrl: './hubs-summary.component.html',
})
export class HubsSummaryComponent implements OnInit {

  public hubs: Observable<DexihHubAuth[]>;

  logoSmallUrl = logoSmallUrl;
  eSharedAccess = eSharedAccess;

  public view = eSharedAccess.Registered;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.hubs = this.authService.getHubsObservable();
  }

}
