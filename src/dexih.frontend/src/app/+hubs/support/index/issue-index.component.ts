import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubsService } from '../../hubs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { DexihHubAuth, CancelToken } from '../../../+auth/auth.models';
import { eIssueType, eIssueCategory, eIssueSeverity, DexihIssue, eIssueStatus } from '../../../shared/shared.models';

@Component({
  selector: 'issue',
  templateUrl: './issue-index.component.html',
  styles: []
})
export class IssueIndexComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    columns = [
        { name: 'name', title: 'Name', format: ''},
        { name: 'description', title: 'Description', format: 'Md'},
        { name: 'type', title: 'Type', format: 'Enum', enum: eIssueType},
        { name: 'category', title: 'Category', format: 'Enum', enum: eIssueCategory},
        { name: 'severity', title: 'Severity', format: 'Enum', enum: eIssueSeverity},
        { name: 'issueStatus', title: 'Status', format: 'Enum', enum: eIssueStatus},
        { name: 'gitHubLink', title: 'Github Issue', format: 'Md'},
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar'},
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.authService.getIssues(this.cancelToken).then(i => {
            const issues = i.map( issue => {
                return {
                    key: issue.key,
                    name: issue.name,
                    description: issue.description,
                    type: issue.type,
                    category: issue.category,
                    severity: issue.severity,
                    issueStatus: issue.issueStatus,
                    gitHubLink: issue.gitHubLink ? `[github](${issue.gitHubLink})` : null,
                    updateDate: issue.updateDate,

                }
            });
            this._tableData.next(issues);
        });
    }

    ngOnDestroy() {
       this.cancelToken.cancel();
    }

    edit(issue: DexihIssue) {
        this.router.navigate(['edit', issue.key], {relativeTo: this.route});
    }

    close() {
        this.authService.navigateUp();
    }

}
