import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MeleeWeaponsService, AuthenticationService } from 'src/app/_services';
import { IMeleeWeapons } from 'src/app/_types';

@Component({
  selector: 'app-meleeweapons',
  templateUrl: './melee-weapons.component.html',
  styleUrls: ['./melee-weapons.component.less']
})
export class MeleeWeaponsComponent implements OnInit {

  meleeWeapons: IMeleeWeapons[];
  loading = true;
  displayedColumns: string[] = [
    'name',
    'range',
    'swingbaseDamage',
    'swingDices',
    'thrustbaseDamage',
    'thrustDices',
    'strRequirement',
    'weight',
    'cost',
    'description',
  ];

  constructor(private meleeWeaponsService: MeleeWeaponsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.meleeWeaponsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.meleeWeapons = data;
          this.loading = false;
        });
  }

}
