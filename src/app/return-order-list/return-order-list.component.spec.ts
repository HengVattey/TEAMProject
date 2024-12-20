import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderListComponent } from './return-order-list.component';

describe('ReturnOrderListComponent', () => {
  let component: ReturnOrderListComponent;
  let fixture: ComponentFixture<ReturnOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnOrderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
