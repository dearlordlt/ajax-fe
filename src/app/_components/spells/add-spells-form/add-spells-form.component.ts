import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpellsService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-spells-form',
  templateUrl: './add-spells-form.component.html',
  styleUrls: ['./add-spells-form.component.less']
})
export class AddSpellsFormComponent implements OnInit {

  @Input()

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder, private spellsService: SpellsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      schoolName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      tier: ['', [Validators.required]],
      spellType: ['', [Validators.required]],
      spellCostType: ['', [Validators.required]],
      spellCost: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  save() {
    this.form.patchValue({ spellType: this.form.value.spellType.split('') });

    this.spellsService.create(this.form.value).pipe(first())
      .subscribe(data => {
        this.updateTable.emit();
        this.form.reset();
      });
  }

}
