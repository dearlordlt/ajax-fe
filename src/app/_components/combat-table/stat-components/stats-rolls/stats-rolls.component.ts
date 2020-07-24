import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-stats-rolls',
  templateUrl: './stats-rolls.component.html',
  styleUrls: ['./stats-rolls.component.less'],
})
export class StatsRollsComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}
  ngOnInit() {}
}
