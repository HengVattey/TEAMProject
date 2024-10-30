import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupComponentComponent } from './pickup-component.component';

describe('PickupComponentComponent', () => {
  let component: PickupComponentComponent;
  let fixture: ComponentFixture<PickupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
