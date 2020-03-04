import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IRangedWeapons } from '../_types';

@Injectable({ providedIn: 'root' })
export class RangedWeaponsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/ranged-weapons').pipe(map(user => user));
  }
  create(rangedWeapon: IRangedWeapons) {
    return this.http.post<any>(environment.apiUrl + '/ranged-weapons', rangedWeapon).pipe(map(weapon => weapon));
  }

  update(rangedWeapon: IRangedWeapons) {
    return this.http.put<any>(environment.apiUrl + '/ranged-weapons/' + rangedWeapon._id, rangedWeapon).pipe(map(weapon => weapon));
  }
}

