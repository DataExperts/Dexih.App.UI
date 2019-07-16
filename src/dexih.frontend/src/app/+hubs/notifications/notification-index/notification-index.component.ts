import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Message } from '../../../+auth/auth.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';

@Component({
  selector: 'notification-index',
  templateUrl: './notification-index.component.html',
  styles: []
})
export class NotificationsIndexComponent implements OnInit, OnDestroy {

    public notifications: Message[];

    showPage = false;
    showPageMessage = 'Loading...';

    columns = [
        { name: 'success', title: 'Success', format: ''},
        { name: 'message', title: 'Message', format: ''},
        { name: 'value', title: 'Value', format: ''},
    ];

    private _tableData = new BehaviorSubject<Array<Message>>(null);
    tableData: Observable<Array<Message>> = this._tableData.asObservable();

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.notifications = this.authService.getNotifications();
    }

    ngOnDestroy() {
    }

    showMessage(message: Message) {
        this.router.navigate(['view', message.reference], {relativeTo: this.route})
    }

    close() {
        this.authService.navigateUp();
    }
}


