import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/_services';
import { first} from 'rxjs/operators';
import Character from './character';
import { MatSnackBar } from '@angular/material';
import { CharCalcService } from 'src/app/_services/char-calc.service';
import { CombatTableService } from 'src/app/_services/combat-table.service';

@Component({
  selector: 'app-combat-table',
  templateUrl: './combat-table.component.html',
  styleUrls: ['./combat-table.component.less']
})

export class CTableComponent implements OnInit {

  users = [];
  loading = false;
  characterNameInput = '';
  charactersList = [];

  constructor(
    private readonly usersService: UserService,
    private readonly snackBar: MatSnackBar,
    private readonly charCalcService: CharCalcService,
    private readonly combatTableService: CombatTableService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.usersService.getUsers().pipe(first())
      .subscribe(
        data => {
          this.users = data;
          this.loading = false;
        });
  }

  validateUserInput(): boolean {
    return this.users.some(el => el.username === this.characterNameInput) ? false : true;
  }

  updateCharacterName(event) {
    this.characterNameInput = event;
  }

  addElement()  {
    if (this.charactersList.find(el => el.name === this.characterNameInput)) {
      this.snackBar.open('Character already exists', 'Achtung!', {
        duration: 5000,
      });
      return;
    }
    const character = new Character(this.characterNameInput, this.users.find(el => el.username === this.characterNameInput)._id);
    this.charactersList.push(character);
  }
}
