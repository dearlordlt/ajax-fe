import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SkillsService, EditCommandsService } from 'src/app/_services';
import { EDIT_EVENT_TYPE } from 'src/app/_types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-skills-form',
  templateUrl: './add-skills-form.component.html',
  styleUrls: ['./add-skills-form.component.less']
})
export class AddSkillFormComponent implements OnInit, OnDestroy {

  @Input() test: string;

  @Output() updateTable = new EventEmitter();

  form: FormGroup;

  editEventSubscription = new Subscription();
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private skillsService: SkillsService,
    private editCommandsService: EditCommandsService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      skillType: ['', [Validators.required]],
    });

    this.editEventSubscription = this.editCommandsService.editSubject.subscribe({
      next: message => {
        if (message.type === EDIT_EVENT_TYPE.SKILLS) {
          this.isEdit = true;
          this.form.patchValue({
            _id: message._id,
            name: message.name,
            description: message.description,
            skillType: message.skillType,
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
      this.skillsService.create(this.form.value).pipe(first())
        .subscribe(data => {
          this.updateTable.emit();
          this.form.reset();
        });
    } else {
      this.skillsService.update(this.form.value).pipe(first())
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
