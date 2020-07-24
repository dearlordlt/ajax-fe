import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { CharCalcService } from 'src/app/_services/char-calc.service';
import { CombatTableService } from 'src/app/_services/combat-table.service';
import { AuthenticationService } from 'src/app/_services';
import { interval } from 'rxjs';
import { CharCombatTable } from 'src/app/_types/char-ctable.interface';
import Character from '../character';

@Component({
  selector: 'app-combat-table',
  templateUrl: './combat-table.component.html',
  styleUrls: ['./combat-table.component.less'],
})
export class CTableComponent implements OnInit, OnDestroy {
  users = [];
  loading = false;
  characterNameInput = '';
  charactersList = [];
  getListInterval: any;
  character: CharCombatTable;

  constructor(
    private readonly usersService: UserService,
    private readonly snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private readonly charCalcService: CharCalcService,
    private readonly combatTableService: CombatTableService
  ) {}

  ngOnInit() {
    this.getUserList();
    this.charactersListUpdate();
    this.getListInterval = interval(1000)
      .pipe()
      .subscribe((val) => this.charactersListUpdate(val));
  }

  ngOnDestroy() {
    this.getListInterval.unsubscribe();
  }

  getUserList() {
    this.usersService
      .getUsers()
      .pipe(first())
      .subscribe((data) => {
        this.users = data;
        this.loading = false;
      });
  }

  charactersListUpdate(i = -1) {
    this.combatTableService
      .findAll()
      .pipe(first())
      .subscribe((data) => {
        // @TODO: refactor code to update instead of rewrite
        if (i === -1) {
          this.charactersList = data;
        } else {
          this.charactersList.forEach((el, index) => {
            if (
              el.name !== this.authenticationService.currentUserValue.username
            ) {
              Object.assign(
                this.charactersList[index],
                data.find((toFind) => toFind.name === el.name)
              );
            }
          });
          this.loading = false;
        }
      });
  }

  validateUserInput(): boolean {
    return this.users.some((el) => el.username === this.characterNameInput)
      ? false
      : true;
  }

  updateCharacterName(event) {
    this.characterNameInput = event;
  }

  addElement() {
    if (this.charactersList.find((el) => el.name === this.characterNameInput)) {
      this.snackBar.open('Character already exists', 'Achtung!', {
        duration: 5000,
      });
      return;
    }
    const character = new Character(
      this.characterNameInput,
      this.users.find((el) => el.username === this.characterNameInput)._id
    );
    this.charactersList.push(character);
    this.combatTableService
      .save(
        this.charactersList.find((el) => el.name === this.characterNameInput)
      )
      .pipe(first())
      .subscribe((data) => {
        this.snackBar.open('Character Added', 'Info', {
          duration: 5000,
        });
      });
  }
}
