import { Component, OnInit } from '@angular/core';
import { RangedWeaponsService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { IRangedWeapons } from 'src/app/_types';

@Component({
  selector: 'app-ranged-weapons',
  templateUrl: './ranged-weapons.component.html',
  styleUrls: ['./ranged-weapons.component.less']
})
export class RangedWeaponsComponent implements OnInit {

  rangedweapons: IRangedWeapons[];
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

  constructor(private rangedweaponsService: RangedWeaponsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.rangedweaponsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.rangedweapons = data;
          this.loading = false;
        });
  }

}