import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: '<router-outlet></router-outlet>',
})
export class AuthComponent implements OnInit {

  constructor(authService: AuthService) {
    authService.initialize();
  }

  ngOnInit() {
  }

}
