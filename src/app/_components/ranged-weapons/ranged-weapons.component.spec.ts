import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangedWeaponsComponent } from './ranged-weapons.component';

describe('RangedWeaponsComponent', () => {
  let component: RangedWeaponsComponent;
  let fixture: ComponentFixture<RangedWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangedWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangedWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
