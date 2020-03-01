import { Component, OnInit } from '@angular/core';
import { RangedWeaponsService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { IRangedWeapons, EDIT_EVENT_TYPE } from 'src/app/_types';

@Component({
  selector: 'app-ranged-weapons',
  templateUrl: './ranged-weapons.component.html',
  styleUrls: ['./ranged-weapons.component.less']
})
export class RangedWeaponsComponent implements OnInit {

  eventType: string = EDIT_EVENT_TYPE.RANGED_WEAPONS;
  rangedWeapons: IRangedWeapons[];
  loading = true;
  displayedColumns: string[] = [
    'name',
    'weaponType',
    'rangeType',
    'range',
    'baseDamage',
    'damageDice',
    'strRequirement',
    'weight',
    'cost',
    'description',
  ];

  constructor(private rangedWeaponsService: RangedWeaponsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.updateTable();
    this.rangedWeaponsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.rangedWeapons = data;
          this.loading = false;
        });
  }

  updateTable() {
    this.rangedWeaponsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.rangedWeapons = data;
          this.loading = false;
        });
  }

}
