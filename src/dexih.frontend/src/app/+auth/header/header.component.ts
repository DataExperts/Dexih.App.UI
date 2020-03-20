import { Component, Input } from '@angular/core';
import { logoUrl } from '../auth.models';

@Component({
    selector: 'auth-header',
    templateUrl: './header.component.html',
    styleUrls: ['../auth.component.scss']
})
export class HeaderComponent {
    @Input() showSignUp = false;
    @Input() showSignIn = false;

    logoUrl = logoUrl;
}
