import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RangedWeaponsService, EditCommandsService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-ranged-form',
  templateUrl: './add-ranged-form.component.html',
  styleUrls: ['./add-ranged-form.component.less']
})
export class AddRangedWeaponsFormComponent implements OnInit, OnDestroy {

  @Input() test: string;

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  editEventSubscription = new Subscription();
  isEdit = false;

  constructor(
  private fb: FormBuilder,
  private rangedWeaponsService: RangedWeaponsService,
  private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [null],
      name: ['', [Validators.required]],
      weaponType: ['', [Validators.required]],
      rangeType: ['', [Validators.required]],
      range: ['', [Validators.required]],
      baseDamage: [0, [Validators.required]],
      damageDice: ['', [Validators.required]],
      strRequirement: [0, [Validators.required]],
      weight: [0, [Validators.required]],
      cost: ['', [Validators.required]],
      description: ['', [Validators.required]]
  });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.RANGED_WEAPONS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            name: message.name,
            weaponType: message.weaponType,
            rangeType: message.rangeType,
            range: message.range,
            baseDamage: message.baseDamage,
            damageDice: message.damageDice,
            strRequirement: message.strRequirement,
            weight: message.weight,
            cost: message.cost,
            description: message.description,
          });
      }
    }
  });
}

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  save() {
    const damageDices = this.form.value.damageDice;

    this.form.patchValue({ damageDice: Array.isArray(damageDices) ? damageDices : damageDices.split('') });
    if (!this.isEdit) {
      this.rangedWeaponsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.rangedWeaponsService.update(this.form.value).pipe(first())
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

