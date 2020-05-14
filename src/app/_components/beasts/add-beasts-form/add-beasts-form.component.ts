import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BeastsService, EditCommandsService } from 'src/app/_services';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-beasts-form',
  templateUrl: './add-beasts-form.component.html',
  styleUrls: ['./add-beasts-form.component.less']
})
export class AddBeastsComponent implements OnInit, OnDestroy {

  @Input() test: string;

  @Output() updateTable = new EventEmitter();

  form: FormGroup;
  abilities = new FormControl();
  abilityList: string[] = ['Attack', 'Ambush', 'Climb', 'Dive', 'Fetch', 'Fly', 'Guard', 'Hunt', 'Track', 'Manual Work', 'Night Vision',
   'Power Battery 1', 'Power Battery 2', 'Power Battery 3', 'Ugly' ];


  editEventSubscription = new Subscription();
  isEdit = false;

  constructor(
  private fb: FormBuilder,
  private beastsService: BeastsService,
  private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [null],
      npc: ['', [Validators.required]],
      attributes: ['', [Validators.required]],
      talents: ['', [Validators.required]],
      stats: ['', [Validators.required]],
      abilities: ['', [Validators.required]],
      weight: ['', [Validators.required]],

  });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.BEASTS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            npc: message.npc,
            attributes: message.attributes,
            talents: message.talents,
            stats: message.stats,
            abilities: message.abilities,
            weight: message.weight,
          });
      }
    }
  });
}

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  save() {

    if (!this.isEdit) {
      this.beastsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.beastsService.update(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
          this.isEdit = false;
        });
    }
  }

  cancel() {
    this.form.reset();
    this.isEdit = false;
  }

}
