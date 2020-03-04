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

  editEventSubscription = new Subscription();
  isEdit = false;


  constructor(
    private fb: FormBuilder,
    private meleeWeaponsService: MeleeWeaponsService,
    private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [''],
      name: ['', [Validators.required]],
      range: ['', [Validators.required]],
      swingBaseDamage: ['', Validators.required],
      swingDices: ['', [Validators.required]],
      thrustBaseDamage: ['', [Validators.required]],
      thrustDices: ['', [Validators.required]],
      strRequirement: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.MELEE_WEAPONS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            name: message.name,
            range: message.range,
            swingBaseDamage: message.swingBaseDamage,
            swingDices: message.swingDices,
            thrustBaseDamage: message.thrustBaseDamage,
            thrustDices: message.thrustDices,
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
    const swingD = this.form.value.swingDices;
    const thrustD = this.form.value.thrustDices;

    this.form.patchValue({ swingDices: Array.isArray(swingD) ? swingD : swingD.split('')});
    this.form.patchValue({ thrustDices: Array.isArray(thrustD) ? thrustD : thrustD.split('') });

    if (!this.isEdit) {
      this.meleeWeaponsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.meleeWeaponsService.update(this.form.value).pipe(first())
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
