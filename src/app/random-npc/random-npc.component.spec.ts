import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNpcComponent } from './random-npc.component';

describe('RandomNpcComponent', () => {
  let component: RandomNpcComponent;
  let fixture: ComponentFixture<RandomNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
