import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combat-table-user-select',
  templateUrl: './combat-table-user-select.component.html',
  styleUrls: ['./combat-table-user-select.component.less']
})

export class CombatTableUserSelectComponent implements OnInit {

  @Input() users: any[];
  @Input() characterNameInput = '';

  constructor() { }

  ngOnInit() {
  }

}

