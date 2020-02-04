import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MeleeWeaponsService } from '../../../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-melee-form',
  templateUrl: './add-melee-form.component.html',
  styleUrls: ['./add-melee-form.component.less']
})
export class AddMeleeFormComponent implements OnInit {

  @Input() test: string;

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder, private meleeWeaponsService: MeleeWeaponsService) { }

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
