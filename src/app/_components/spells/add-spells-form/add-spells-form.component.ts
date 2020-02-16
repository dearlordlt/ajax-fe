import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpellsService, EditCommandsService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-add-spells-form',
  templateUrl: './add-spells-form.component.html',
  styleUrls: ['./add-spells-form.component.less']
})
export class AddSpellsFormComponent implements OnInit, OnDestroy {

  @Input()

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  editEventSubscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private spellsService: SpellsService,
    private editCommandsService: EditCommandsService
  ) { }

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

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: type => {
        if (type === EDIT_EVENT_TYPE.SPELLS) {
          console.log(type);
        }
      }
    });
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
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
