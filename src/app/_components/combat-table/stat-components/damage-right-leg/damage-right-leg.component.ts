import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-damage-right-leg',
  templateUrl: './damage-right-leg.component.html',
  styleUrls: ['./damage-right-leg.component.less'],
})
export class DamageRightLegComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
