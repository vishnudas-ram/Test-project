import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkScroll } from './cdk-scroll';

describe('CdkScroll', () => {
  let component: CdkScroll;
  let fixture: ComponentFixture<CdkScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(CdkScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
