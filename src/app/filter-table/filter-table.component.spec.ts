import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTAbleComponent } from './filter-table.component';

describe('FilterTAbleComponent', () => {
  let component: FilterTAbleComponent;
  let fixture: ComponentFixture<FilterTAbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTAbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTAbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
