import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpizzatypeComponent } from './viewpizzatype.component';

describe('ViewpizzatypeComponent', () => {
  let component: ViewpizzatypeComponent;
  let fixture: ComponentFixture<ViewpizzatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpizzatypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpizzatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
