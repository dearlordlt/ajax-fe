import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RangedWeaponsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/ranged-weapons').pipe(map(user => user));
  }
}