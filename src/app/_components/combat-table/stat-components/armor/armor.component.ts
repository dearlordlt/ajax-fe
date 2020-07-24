import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.less'],
})
export class ArmorComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
