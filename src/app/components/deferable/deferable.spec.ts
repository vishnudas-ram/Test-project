import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deferable } from './deferable';

describe('Deferable', () => {
  let component: Deferable;
  let fixture: ComponentFixture<Deferable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferable],
    }).compileComponents();

    fixture = TestBed.createComponent(Deferable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
