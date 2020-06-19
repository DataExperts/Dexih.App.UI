import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache, sharedObjectProperties } from '../hub.models';
import { HubService } from '../hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { logoSmallUrl } from '../../+auth/auth.models';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DexihActiveAgent, eConnectionPurpose } from '../../shared/shared.models';
import { AuthService } from '../../+auth/auth.service';

@Component({
  selector: 'dexih-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  public hubCache: HubCache;

  public datalinkFilterString;
  public connectionFilterString;
  public columnValidationFilterString;
  public fileFormatFilterString;
  public datajobFilterString;
  public tableFilterString;

  public remoteAgent: DexihActiveAgent;

  logoSmallUrl = logoSmallUrl;
  sharedObjectProperties = sharedObjectProperties;

  public noManagedConnection = false;
  constructor(public hubService: HubService, public authService: AuthService) { }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.hubService.getHubCacheObservable(),
        this.hubService.getRemoteAgentObservable(),
      ).subscribe(result => {
        this.hubCache = result[0];
        this.remoteAgent = result[1];

        if (this.hubCache.isLoaded()) {
          if (this.hubCache.hub.dexihConnections.findIndex(c => c.purpose === eConnectionPurpose.Managed) >= 0) {
            this.noManagedConnection = false;
          } else {
            this.noManagedConnection = true;
          }
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Summary');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  onDatalinkFilterString(filterString: string) {
    this.datalinkFilterString = filterString;
  }
  onConnectionFilterString(filterString: string) {
    this.connectionFilterString = filterString;
  }
  onColumnValidationFilterString(filterString: string) {
    this.columnValidationFilterString = filterString;
  }
  onFileFormatFilterString(filterString: string) {
    this.fileFormatFilterString = filterString;
  }
  onDatajobFilterString(filterString: string) {
    this.datajobFilterString = filterString;
  }
  onTableFilterString(filterString: string) {
    this.tableFilterString = filterString;
  }
}
