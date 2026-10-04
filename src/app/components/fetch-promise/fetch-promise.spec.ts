import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FetchPromise } from "./fetch-promise";

describe("FetchPromise", () => {
  let component: FetchPromise;
  let fixture: ComponentFixture<FetchPromise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchPromise],
    }).compileComponents();

    fixture = TestBed.createComponent(FetchPromise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
