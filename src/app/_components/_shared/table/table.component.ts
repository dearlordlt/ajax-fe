import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  constructor() { }

  ngOnInit() {
  }

}
