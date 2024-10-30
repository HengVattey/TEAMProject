import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOderListComponent } from './receive-oder-list.component';

describe('ReceiveOderListComponent', () => {
  let component: ReceiveOderListComponent;
  let fixture: ComponentFixture<ReceiveOderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveOderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveOderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
