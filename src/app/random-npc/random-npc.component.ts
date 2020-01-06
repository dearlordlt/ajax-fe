import { Component, OnInit, ViewChild } from '@angular/core';
import { Npc } from '../_types';

@Component({
  selector: 'app-random-npc',
  templateUrl: './random-npc.component.html',
  styleUrls: ['./random-npc.component.less']
})
export class RandomNpcComponent implements OnInit {

  npcList: Npc[] = [];
  displayedColumns: string[] = ['id', 'name'];
  dataSource = this.npcList;

  constructor() { }

  ngOnInit() {
    this.npcList.push({ id: 1, name: 'dude' });
  }

}
