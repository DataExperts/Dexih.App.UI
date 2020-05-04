import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { PublicService } from './public.service';
import { Subscription} from 'rxjs';
import { DexihMessageComponent } from '../shared/ui/dexihMessage';
import { AuthService } from '../+auth/auth.service';
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
