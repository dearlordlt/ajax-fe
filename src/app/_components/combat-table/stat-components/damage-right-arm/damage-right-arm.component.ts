import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-damage-right-arm',
  templateUrl: './damage-right-arm.component.html',
  styleUrls: ['./damage-right-arm.component.less'],
})
export class DamageRightArmComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}
  ngOnInit() {}
}
