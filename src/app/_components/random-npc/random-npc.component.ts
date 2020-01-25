import { Component, OnInit, ViewChild } from '@angular/core';
import { Npc } from '../../_types';
import { WEAPONS } from '../_data/weapons';
import { BEGINNING, MIDDLE, ENDING } from '../_data/names';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-random-npc',
  templateUrl: './random-npc.component.html',
  styleUrls: ['./random-npc.component.less']
})
export class RandomNpcComponent implements OnInit {

  npcList: Npc[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'attack',
    'defence',
    'health',
    'weapon',
    'status'
  ];
  dataSource = this.npcList;
  nextId = 1;
  numberOfNpc = 10;
  toughness = 0;

  constructor() { }

  ngOnInit() {
    this.generateNpc(this.numberOfNpc);
  }

  onGenerate() {
    this.npcList = [];
    this.generateNpc(this.numberOfNpc);
    this.dataSource = this.npcList;
  }

  generateNpc(num: number) {
    this.nextId = 1;
    for (let i = 0; i < num; i++) {
      this.npcList.push(this.randomNpc());
    }
  }

  randomNpc(): Npc {
    const newNpc: Npc = {
      id: this.nextId,
      name: this.getRandomName(),
      attack: this.getRnd(10, 13 + this.toughness),
      defence: this.getRnd(10, 13 + this.toughness),
      health: this.getRnd(10, 13 + this.toughness),
      weapon: this.getRndWeapon(),
      status: true,
    };

    this.nextId++;
    return newNpc;
  }

  getRandomName(): string {
    return BEGINNING[this.getRnd(0, (BEGINNING.length - 1))] +
      MIDDLE[this.getRnd(0, (MIDDLE.length - 1))] +
      ENDING[this.getRnd(0, (ENDING.length - 1))];
  }

  getRnd(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  getRndWeapon(): string {
    return WEAPONS[this.getRnd(0, (WEAPONS.length - 1))];
  }

}
