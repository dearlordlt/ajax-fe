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

  create(spells: ISpells) {
    return this.http.post<any>(environment.apiUrl + '/spells', spells).pipe(map(spell => spell));
  }
}

