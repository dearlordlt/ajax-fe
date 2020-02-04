import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeleeFormComponent } from './add-melee-form.component';

describe('AddMeleeFormComponent', () => {
  let component: AddMeleeFormComponent;
  let fixture: ComponentFixture<AddMeleeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeleeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeleeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
