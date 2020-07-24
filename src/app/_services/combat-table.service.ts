import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharCombatTable } from '../_types/char-ctable.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CombatTableService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http
      .get<any>(environment.apiUrl + '/char-ctable')
      .pipe(map((char) => char));
  }

  save(charCTable: CharCombatTable) {
    return this.http
      .put<any>(
        environment.apiUrl + '/char-ctable/' + charCTable._id,
        charCTable
      )
      .pipe(map((char) => char));
  }
}
