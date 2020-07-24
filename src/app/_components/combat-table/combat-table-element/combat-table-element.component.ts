import { Component, OnInit, Input, Output } from '@angular/core';
import { CharCalcService } from '../../../_services/char-calc.service';
import { pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { CombatTableService } from 'src/app/_services/combat-table.service';
import { MatSnackBar } from '@angular/material';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-combat-table-element',
  templateUrl: './combat-table-element.component.html',
  styleUrls: ['./combat-table-element.component.less'],
})
export class CombatTableElementComponent implements OnInit {
  @Input() character: CharCombatTable;
  @Input() show = true;
  view = 'midView';

  constructor(
    private readonly calculationsService: CharCalcService,
    private readonly combatTableService: CombatTableService,
    private readonly snackBar: MatSnackBar,
    private readonly helpers: Helpers
  ) {}

  ngOnInit() {}

  updateTable() {
    this.calculationsService.updateStats(this.character);
    this.combatTableService
      .save(this.character)
      .pipe(first())
      .subscribe((data) => {
        this.snackBar.open('Character Saved', 'Info', {
          duration: 5000,
        });
      });
  }

  changeState(viewType: string) {
    this.view = viewType;
  }
}
