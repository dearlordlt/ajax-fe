import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditCommandsService {
    public editSubject: Subject<any>;

    constructor() {
        this.editSubject = new Subject<string>();
    }

    dispatch(type: string, col: any) {
        this.editSubject.next({ type, ...col });
    }
}
