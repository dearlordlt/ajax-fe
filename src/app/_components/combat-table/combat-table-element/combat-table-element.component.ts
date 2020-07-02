import { Component, OnInit, Input } from '@angular/core';
import Character from '../character';
import { CharCalcService } from '../../../_services/char-calc.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combat-table-element',
  templateUrl: './combat-table-element.component.html',
  styleUrls: ['./combat-table-element.component.less']
})
export class CombatTableElementComponent implements OnInit {

  @Input() character: Character;

  constructor(public calculationsService: CharCalcService ) { }

  ngOnInit() {
  }

}
