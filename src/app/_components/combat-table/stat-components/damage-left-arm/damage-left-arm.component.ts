import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-damage-left-arm',
  templateUrl: './damage-left-arm.component.html',
  styleUrls: ['./damage-left-arm.component.less'],
})
export class DamageLeftArmComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
