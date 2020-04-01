import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { PublicService } from './public.service';
import { Subscription} from 'rxjs';
import { DexihMessageComponent } from '../shared/ui/dexihMessage';
import { AuthService } from '../+auth/auth.service';
import { logoUrl } from '../+auth/auth.models';

@Component({
    selector: 'dexih-public',
    templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit, OnDestroy {

    logoUrl = logoUrl;

    constructor(private authService: AuthService, private publicService: PublicService) {
    }

    ngOnInit() {


    }

    ngOnDestroy() {
    }

}
