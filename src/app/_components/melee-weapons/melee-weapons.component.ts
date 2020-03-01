import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MeleeWeaponsService, AuthenticationService } from 'src/app/_services';
import { IMeleeWeapons, EDIT_EVENT_TYPE } from 'src/app/_types';

@Component({
  selector: 'app-melee-weapons',
  templateUrl: './melee-weapons.component.html',
  styleUrls: ['./melee-weapons.component.less']
})
export class MeleeWeaponsComponent implements OnInit {

  eventType: string = EDIT_EVENT_TYPE.MELEE_WEAPONS;
  meleeWeapons: IMeleeWeapons[];
  loading = true;
  displayedColumns: string[] = [
    'name',
    'range',
    'swingBaseDamage',
    'swingDices',
    'thrustBaseDamage',
    'thrustDices',
    'strRequirement',
    'weight',
    'cost',
    'description',
  ];

  constructor(private meleeWeaponsService: MeleeWeaponsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.updateTable();
    this.meleeWeaponsService.getAll().pipe(first())
    .subscribe(
      data => {
        this.meleeWeapons = data;
        this.loading = false;
      });

  }

  updateTable() {
    this.meleeWeaponsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.meleeWeapons = data;
          this.loading = false;
        });
  }

}
