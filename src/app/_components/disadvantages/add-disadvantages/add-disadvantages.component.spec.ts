import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisadvantagesComponent } from './add-disadvantages.component';

describe('AddDisadvantagesComponent', () => {
  let component: AddDisadvantagesComponent;
  let fixture: ComponentFixture<AddDisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisadvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
