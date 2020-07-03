import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combat-table-user-select',
  templateUrl: './combat-table-user-select.component.html',
  styleUrls: ['./combat-table-user-select.component.less']
})

export class CombatTableUserSelectComponent implements OnInit {

  @Input() users: any[];
  @Output() update = new EventEmitter<string>();
  characterNameInput = '';

  constructor() { }

  ngOnInit() {
  }

  onCharacterNameChanged(event) {
    this.update.emit(this.characterNameInput);
  }
}

