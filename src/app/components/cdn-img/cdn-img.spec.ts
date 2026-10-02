import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdnImg } from './cdn-img';

describe('CdnImg', () => {
  let component: CdnImg;
  let fixture: ComponentFixture<CdnImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdnImg],
    }).compileComponents();

    fixture = TestBed.createComponent(CdnImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
