import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivAnComponent } from './liv-an.component';

describe('LivAnComponent', () => {
  let component: LivAnComponent;
  let fixture: ComponentFixture<LivAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivAnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
