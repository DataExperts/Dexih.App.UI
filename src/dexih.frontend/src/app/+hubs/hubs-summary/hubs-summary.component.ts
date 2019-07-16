import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../+auth/auth.service';
import { Observable, Observer, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import {DexihHubAuth, logoSmallUrl} from '../../+auth/auth.models';
import { Router } from '@angular/router';

@Component({
  selector: 'hubs-summary',
  templateUrl: './hubs-summary.component.html',
})
export class HubsSummaryComponent implements OnInit {

  public hubs: Observable<DexihHubAuth[]>;

  logoSmallUrl = logoSmallUrl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.hubs = this.authService.getHubsObservable();
  }

}
