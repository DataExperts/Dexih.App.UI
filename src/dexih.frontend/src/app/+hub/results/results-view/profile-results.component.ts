import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { TransformWriterResult } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, BehaviorSubject, Observable, combineLatest} from 'rxjs';
import { SelectQuery, DownloadObject } from '../../hub.query.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'profile-results',
    templateUrl: './profile-results.component.html'
})

export class ProfileResultsComponent implements OnInit, OnDestroy {
    @Input() auditResult: TransformWriterResult;

    columns: Array<any>;
    data: Array<any>;

    showDetailed = false;

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private hubService: HubService
    ) {

    }

    ngOnInit() {
        this.refresh();
    }

    ngOnDestroy(): void {
        this.cancelToken.cancel();
    }

    refresh() {
        this.hubService.previewProfileData(this.auditResult, !this.showDetailed, this.cancelToken).then(result => {
            this.columns = result.columns;
            this.data = result.data;
        }).catch(reason => {
          // this.hubService.addHubMessage(reason);
        });
    }

    download() {
        this.hubService.downloadProfileData(this.auditResult);
    }
}
