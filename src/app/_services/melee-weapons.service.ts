import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IMeleeWeapons } from '../_types';

@Injectable({ providedIn: 'root' })
export class MeleeWeaponsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/melee-weapons').pipe(map(weapons => weapons));
  }

  create(meleeWeapon: IMeleeWeapons) {
    return this.http.post<any>(environment.apiUrl + '/melee-weapons', meleeWeapon).pipe(map(weapon => weapon));
  }

  update(meleeWeapon: IMeleeWeapons) {
    return this.http.put<any>(environment.apiUrl + '/melee-weapons/' + meleeWeapon._id, meleeWeapon).pipe(map(weapon => weapon));
  }
}
