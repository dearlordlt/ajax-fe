import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ISkills } from '../_types';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(environment.apiUrl + '/skills').pipe(map(user => user));
  }

  create(skills: ISkills) {
    return this.http.post<any>(environment.apiUrl + '/skills', skills).pipe(map(skill => skill));
  }
}
