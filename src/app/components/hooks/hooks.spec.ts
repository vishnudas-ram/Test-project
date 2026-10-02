import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hooks } from './hooks';

describe('Hooks', () => {
  let component: Hooks;
  let fixture: ComponentFixture<Hooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hooks],
    }).compileComponents();

    fixture = TestBed.createComponent(Hooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
