import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from '../../_services';
import { EDIT_EVENT_TYPE, IBeasts } from '../../_types';
import { first } from 'rxjs/operators';
import { BeastsService } from 'src/app/_services/beasts.service';

@Component({
  selector: 'app-beasts',
  templateUrl: './beasts.component.html',
  styleUrls: ['./beasts.component.less']
})
export class BeastsComponent implements OnInit {

  eventType: string = EDIT_EVENT_TYPE.BEASTS;
  beasts: IBeasts[];
  loading = true;
  displayedColumns: string[] = [
    'npc',
    'attributes',
    'talents',
    'stats',
    'Abilities',
    'weight',
  ];

  constructor(private beastsService: BeastsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.updateTable();
    this.beastsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.beasts = data;
          this.loading = false;
        });
  }

  updateTable() {
    this.beastsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.beasts = data;
          this.loading = false;
        });
  }

}
