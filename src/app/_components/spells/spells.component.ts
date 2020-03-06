import { Component, OnInit } from '@angular/core';
import { AuthenticationService, SpellsService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { ISpells, EDIT_EVENT_TYPE } from 'src/app/_types';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.less']
})
export class SpellsComponent implements OnInit {

  eventType: string = EDIT_EVENT_TYPE.SPELLS;
  spells: ISpells[];
  loading = true;
  displayedColumns: string[] = [
    'name',
    'schoolName',
    'tier',
    'description',
    'spellType',
    'spellCostType',
    'spellCost',
  ];


  constructor(private spellsService: SpellsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.spellsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.spells = data;
          this.loading = false;
        });
  }

  updateTable() {
    this.spellsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.spells = data;
          this.loading = false;
      });
    }
}

