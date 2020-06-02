import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private spellsService: SpellsService,
    private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [null],
      name: ['', [Validators.required]],
      schoolName: ['', [Validators.required]],
      tier: ['', [Validators.required]],
      spellType: ['', [Validators.required]],
      spellCost: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.SPELLS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            name: message.name,
            schoolName: message.schoolName,
            tier: message.tier,
            spellType: message.spellType,
            spellCost: message.spellCost,
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

    if (!this.isEdit) {
      this.spellsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.spellsService.update(this.form.value).pipe(first())
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
