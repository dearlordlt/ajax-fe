import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IBeasts } from '../_types'

@Injectable({ providedIn: 'root' })
export class BeastsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/beasts').pipe(map(beasts => beasts));
  }

  create(beasts: IBeasts) {
    return this.http.post<any>(environment.apiUrl + '/beasts', beasts).pipe(map(beasts => beasts));
  }

  update(beasts: IBeasts) {
    return this.http.put<any>(environment.apiUrl + '/beasts/' + beasts._id, beasts).pipe(map(beasts => beasts));
  }
}
