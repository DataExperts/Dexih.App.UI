import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubsService } from '../hubs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { AuthService } from '../../+auth/auth.service';
import { DexihHubAuth } from '../../+auth/auth.models';

@Component({
  selector: 'hubs',
  templateUrl: './hub-index.component.html',
  styles: []
})
export class HubIndexComponent implements OnInit, OnDestroy {

    hubsObserve: Subscription;
    hubs: Array<DexihHubAuth>;
    hubCacheStatus: Subscription;
    hubName: string;
    hubStatusMessage: string;
    isLoaded = false;

    columns = [
        { name: 'name', title: 'Name', format: ''},
        { name: 'description', title: 'Description', format: ''},
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar'},
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private authService: AuthService,
        private hubService: HubsService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.hubsObserve = this.authService.getHubsObservable().subscribe(hubs => {
            if (hubs) { this.isLoaded = true; }
            this._tableData.next(hubs);
        } );
    }

    ngOnDestroy() {
       if (this.hubsObserve) {this.hubsObserve.unsubscribe(); }
    }

    deleteHubs(hubs: DexihHubAuth[]) {
        this.authService.deleteHubs(hubs).catch(reason => {
            this.hubService.addHubMessage(reason);
        });
    }

    edit(hub: DexihHubAuth) {
        this.router.navigate(['hub-edit', hub.hubKey], {relativeTo: this.route});
    }

    close() {
        this.authService.navigateUp();
    }

}
