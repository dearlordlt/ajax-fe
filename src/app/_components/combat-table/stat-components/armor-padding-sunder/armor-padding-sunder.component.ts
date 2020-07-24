import { Component, OnInit, Input } from '@angular/core';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import { Helpers } from 'src/app/_helpers/helpers';

@Component({
  selector: 'app-armor-padding-sunder',
  templateUrl: './armor-padding-sunder.component.html',
  styleUrls: ['./armor-padding-sunder.component.less'],
})
export class ArmorPaddingSunderComponent implements OnInit {
  @Input() character: CharCombatTable;

  constructor(private readonly helpers: Helpers) {}

  ngOnInit() {}
}
