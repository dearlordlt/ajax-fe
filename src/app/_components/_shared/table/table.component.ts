import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/_services';
import { ITableEditOpt } from 'src/app/_types';
import { EditCommandsService } from 'src/app/_services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input()
  ds: any[];

  @Input()
  loading: boolean;

  @Input()
  displayedColumns: string[];

  @Input()
  editOpt: ITableEditOpt = { type: '', column: '' };

  constructor(private authService: AuthenticationService, private readonly editCommandsService: EditCommandsService) { }

  ngOnInit() { }

  dispatchEditCommand(type: string, col: any) {
    this.editCommandsService.dispatch(type, col);
  }

  get isAdmin(): boolean {
    return this.authService.currentUserValue.role === 'ADMIN';
  }

}
  