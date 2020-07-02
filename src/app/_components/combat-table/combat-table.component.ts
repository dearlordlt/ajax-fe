import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services';
import { first} from 'rxjs/operators';
import Character from './character';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-combat-table',
  templateUrl: './combat-table.component.html',
  styleUrls: ['./combat-table.component.less']
})

export class CTableComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  users = [];
  loading = false;
  characterNameInput = '';
  charactersList = [];

  constructor(private readonly usersService: UserService, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
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
    /* if (this.users.some(el => el.username === this.characterNameInput)) {
      return false;
    }
    return true; */
    return this.users.some(el => el.username === this.characterNameInput) ? false : true;
  }

  addElement()  {
    const character = new Character(this.characterNameInput);
    this.charactersList.push(character);
    this.characterNameInput = '';
  }
}
