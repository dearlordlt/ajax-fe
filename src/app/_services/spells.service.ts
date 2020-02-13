import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ISpells } from '../_types/spells.interface';

@Injectable({ providedIn: 'root' })
export class SpellsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/spells').pipe(map(user => user));
  }

  create(meleeWeapon: ISpells) {
    return this.http.post<any>(environment.apiUrl + '/spells', meleeWeapon).pipe(map(weapon => weapon));
  }
}

