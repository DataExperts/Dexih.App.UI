import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { TransformWriterResult } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, BehaviorSubject, Observable, combineLatest} from 'rxjs';
import { SelectQuery, DownloadObject } from '../../hub.query.models';

@Component({
    selector: 'profile-results',
    templateUrl: './profile-results.component.html'
})

export class ProfileResultsComponent implements OnInit {
    @Input() auditResult: TransformWriterResult;

    columns: Array<any>;
    data: Array<any>;

    showDetailed = false;

    constructor(
        private authService: AuthService,
        private hubService: HubService
    ) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.hubService.previewProfileData(this.auditResult, !this.showDetailed).then(result => {
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
