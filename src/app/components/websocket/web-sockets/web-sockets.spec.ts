import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSockets } from './web-sockets';

describe('WebSockets', () => {
  let component: WebSockets;
  let fixture: ComponentFixture<WebSockets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSockets],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSockets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
