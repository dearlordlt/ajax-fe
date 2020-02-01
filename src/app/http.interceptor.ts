import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (!req.url.includes('auth/login')) {
      if (localStorage.getItem('currentUser')) {
        const { accessToken } = JSON.parse(localStorage.getItem('currentUser'));
        if (accessToken) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
        }
      }
    }

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success && evt.body.success.message && evt.body.success.title) {
            this.snackBar.open(evt.body.success.message, evt.body.success.title, {
              duration: 5000,
            });
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('HTTP ERROR', err);
          if (err.status === 401) {
            console.log('NAV LOGIN');
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login']);
          } else {
            this.snackBar.open(err.message, 'OK', {
              duration: 5000,
            });
          }
        }
        return of(err);
      }));
  }
}
