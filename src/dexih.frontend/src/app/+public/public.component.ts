import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { logoUrl } from '../+auth/auth.models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dexih-public',
    templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit, OnDestroy {
    _subscription: Subscription;

    logoUrl = logoUrl;
    embedded = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
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
