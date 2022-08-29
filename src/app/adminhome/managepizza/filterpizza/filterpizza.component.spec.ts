import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpizzaComponent } from './filterpizza.component';

describe('FilterpizzaComponent', () => {
  let component: FilterpizzaComponent;
  let fixture: ComponentFixture<FilterpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
