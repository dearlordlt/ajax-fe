import { Component, OnInit } from '@angular/core';
import Character from './character';

@Component({
  selector: 'app-combat-table',
  templateUrl: './combat-table.component.html',
  styleUrls: ['./combat-table.component.less']
})
export class CTableComponent implements OnInit {

  charactersList = [];
  characterNameInput = '';

  constructor() { }

  addElement()  {
    const character = new Character(this.characterNameInput);
    this.charactersList.push(character);
    this.characterNameInput = '';
  }

  ngOnInit() {
  }

}
