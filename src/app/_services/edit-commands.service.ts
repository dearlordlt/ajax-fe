import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditCommandsService {
    public editSubject: Subject<string>;

    constructor() {
        this.editSubject = new Subject<string>();
    }

    dispatch(type: string) {
        this.editSubject.next(type);
    }
}
