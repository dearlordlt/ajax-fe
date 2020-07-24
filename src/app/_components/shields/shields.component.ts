import { Component, OnInit } from '@angular/core';
import { ShieldsService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { IShields, EDIT_EVENT_TYPE } from 'src/app/_types';

@Component({
  selector: 'app-shields',
  templateUrl: './shields.component.html',
  styleUrls: ['./shields.component.less'],
})
export class ShieldsComponent implements OnInit {
  eventType: string = EDIT_EVENT_TYPE.SHIELDS;
  shields: IShields[];
  loading = true;
  displayedColumns: string[] = ['name', 'weight', 'defence', 'hp', 'cost'];

  constructor(
    private shieldsService: ShieldsService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.shieldsService
      .getAll()
      .pipe(first())
      .subscribe((data) => {
        this.shields = data;
        this.loading = false;
      });
  }

  updateTable() {
    this.shieldsService
      .getAll()
      .pipe(first())
      .subscribe((data) => {
        this.shields = data;
        this.loading = false;
      });
  }
}
