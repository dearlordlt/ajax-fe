import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MeleeWeaponsService, EditCommandsService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-add-melee-form',
  templateUrl: './add-melee-form.component.html',
  styleUrls: ['./add-melee-form.component.less']
})
export class AddMeleeFormComponent implements OnInit, OnDestroy {

  @Input() test: string;

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  eventType: string = EDIT_EVENT_TYPE.MELEE_WEAPONS;
  editEventSubscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private meleeWeaponsService: MeleeWeaponsService,
    private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      range: ['', [Validators.required]],
      swingBaseDamage: ['', [Validators.required]],
      swingDices: ['', [Validators.required]],
      thrustBaseDamage: ['', [Validators.required]],
      thrustDices: ['', [Validators.required]],
      strRequirement: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: type => {
        if (type === this.eventType) {
          console.log(type);
        }
      }
    });
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  save() {
    this.form.patchValue({ swingDices: this.form.value.swingDices.split('') });
    this.form.patchValue({ thrustDices: this.form.value.thrustDices.split('') });

    this.meleeWeaponsService.create(this.form.value).pipe(first())
      .subscribe(data => {
        this.updateTable.emit();
        this.form.reset();
      });
  }

}
