import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-armor-padding-weight',
  templateUrl: './armor-padding-weight.component.html',
  styleUrls: ['./armor-padding-weight.component.less'],
})
export class ArmorPaddingWeightComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
