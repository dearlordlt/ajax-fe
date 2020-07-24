import { AuthenticationService } from '../_services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Helpers {
  checkAuth(charName: string) {
    return charName === this.authenticationService.currentUserValue.username
      ? true
      : false;
  }

  constructor(private authenticationService: AuthenticationService) {}
}
