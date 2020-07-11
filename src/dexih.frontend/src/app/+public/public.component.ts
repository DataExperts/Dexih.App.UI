import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { logoUrl } from '../+auth/auth.models';
import { ActivatedRoute } from '@angular/router';
import { Functions } from '../shared/utils/functions';
import { AuthService } from '../+auth/auth.service';

@Component({
    selector: 'dexih-public',
    templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit, OnDestroy {
    _subscription: Subscription;

    logoUrl = logoUrl;
    embedded = false;

    display = false;

    constructor(private route: ActivatedRoute, private authService: AuthService) {
    }

    ngOnInit() {
        // if there is no cross scripting token, make a call to the api to get one.
        if (!Functions.getCookie('XSRF-TOKEN')) {
            this.authService.refreshUser(true).then(() => {
                this.display = true;
            });
        } else {
            this.display = true;
        }

        this._subscription = this.route.queryParams.subscribe(p => {
            if (p['embed'] === 'true') {
                this.embedded = true;
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

}
