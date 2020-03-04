import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IShields } from '../_types';

@Injectable({ providedIn: 'root' })
export class ShieldsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/shields').pipe(map(user => user));
  }

  create(shields: IShields) {
    return this.http.post<any>(environment.apiUrl + '/shields', shields).pipe(map(shield => shield));
  }

  update(shields: IShields) {
    return this.http.put<any>(environment.apiUrl + '/shields/' + shields._id, shields).pipe(map(shield => shield));
  }
}
