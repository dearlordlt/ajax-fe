import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';

// tslint:disable-next-line: component-selector
@Component({ selector: 'app-ajax', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.authenticationService.keepAlive().subscribe(data => {
      console.log('PING', data);
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
