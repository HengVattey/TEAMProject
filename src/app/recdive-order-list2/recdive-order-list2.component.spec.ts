import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecdiveOrderList2Component } from './recdive-order-list2.component';

describe('RecdiveOrderList2Component', () => {
  let component: RecdiveOrderList2Component;
  let fixture: ComponentFixture<RecdiveOrderList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecdiveOrderList2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecdiveOrderList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
