import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-damage-left-leg',
  templateUrl: './damage-left-leg.component.html',
  styleUrls: ['./damage-left-leg.component.less'],
})
export class DamageLeftLegComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
