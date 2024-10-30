import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REjectOrderComponent } from './reject-order.component';

describe('REjectOrderComponent', () => {
  let component: REjectOrderComponent;
  let fixture: ComponentFixture<REjectOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [REjectOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REjectOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
