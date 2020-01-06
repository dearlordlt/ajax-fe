import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { AuthenticationService } from './_services';
import { User } from './_models';

// tslint:disable-next-line: component-selector
@Component({ selector: 'app-ajax', templateUrl: 'app.component.html' })
export class AppComponent {
  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.drawer.close();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
