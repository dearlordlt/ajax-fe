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

  constructor(
    private fb: FormBuilder,
    private shieldsService: ShieldsService,
    private editCommandsService: EditCommandsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      defence: ['', [Validators.required]],
      hp: ['', [Validators.required]],
      cost: ['', [Validators.required]]
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: type => {
        if (type === EDIT_EVENT_TYPE.SHIELDS) {
          console.log(type);
        }
      }
    });
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  save() {
    this.shieldsService.create(this.form.value).pipe(first())
    .subscribe(data => {
      this.updateTable.emit();
      this.form.reset();
    });
  }
}
