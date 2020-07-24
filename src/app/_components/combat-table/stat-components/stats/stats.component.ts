import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less'],
})
export class StatsComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
