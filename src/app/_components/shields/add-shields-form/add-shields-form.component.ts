import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShieldsService, EditCommandsService,  } from 'src/app/_services';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-shields-form',
  templateUrl: './add-shields-form.component.html',
  styleUrls: ['./add-shields-form.component.less']
})
export class AddShieldsFormComponent implements OnInit, OnDestroy {

  @Input()

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  editEventSubscription = new Subscription();
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private shieldsService: ShieldsService,
    private editCommandsService: EditCommandsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      _id: [null],
      name: ['', [Validators.required]],
      weight: [0, [Validators.required]],
      defence: [0, [Validators.required]],
      hp: [0, [Validators.required]],
      cost: ['', [Validators.required]]
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.SHIELDS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            name: message.name,
            weight: message.weight,
            defence: message.defence,
            hp: message.hp,
            cost: message.cost,
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
      this.shieldsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.shieldsService.update(this.form.value).pipe(first())
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
