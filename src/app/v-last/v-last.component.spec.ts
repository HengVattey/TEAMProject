import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLastComponent } from './v-last.component';

describe('VLastComponent', () => {
  let component: VLastComponent;
  let fixture: ComponentFixture<VLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VLastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
