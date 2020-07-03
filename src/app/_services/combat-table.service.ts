import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharCTable } from '../_types/char-ctable.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CombatTableService {

  constructor(private http: HttpClient) { }


  save(charCTable: ICharCTable) {
    return this.http.put<any>(environment.apiUrl + '/char-ctable/' + charCTable._id, charCTable).pipe(map(char => char));
  }
}



