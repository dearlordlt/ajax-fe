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

  constructor(
  private fb: FormBuilder,
  private rangedWeaponsService: RangedWeaponsService,
  private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      weaponType: ['', [Validators.required]],
      rangeType: ['', [Validators.required]],
      range: ['', [Validators.required]],
      baseDamage: ['', [Validators.required]],
      damageDices: ['', [Validators.required]],
      strRequirement: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      description: ['', [Validators.required]]
  });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: type => {
        if (type === EDIT_EVENT_TYPE.RANGED_WEAPONS) {
          console.log(type);
        }
      }
    });
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  save() {
    this.form.patchValue({ damageDices: this.form.value.damageDices.split('') });

    this.rangedWeaponsService.create(this.form.value).pipe(first())
      .subscribe(data => {
        this.updateTable.emit();
        this.form.reset();
      });
  }

}

