import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefunListComponent } from './refun-list.component';

describe('RefunListComponent', () => {
  let component: RefunListComponent;
  let fixture: ComponentFixture<RefunListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefunListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
