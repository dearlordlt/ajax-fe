import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-damage-torso',
  templateUrl: './damage-torso.component.html',
  styleUrls: ['./damage-torso.component.less'],
})
export class DamageTorsoComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
