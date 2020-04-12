import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import { environment } from 'src/environments/environment';

interface ISuccess {
    success: boolean;
}

@Injectable({ providedIn: 'root' })
export class RegistrationService {
    private registrationUserSubject: BehaviorSubject<User>;
    public registeredUser: Observable<User>;
    public $alive: Observable<ISuccess>;

    constructor(private http: HttpClient) {
        this.registrationUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('registeredUser')));
        this.registeredUser = this.registrationUserSubject.asObservable();
    }

    public get registrationUserValue(): User {
        return this.registrationUserSubject.value;
    }

    register(username: string, password: string, email: string) {
        return this.http.post<any>(environment.apiUrl + '/auth/register', { username, password, email })
            .pipe(map(user => {
                this.registrationUserSubject.next(user);
                return user;
            }));
    }
}
