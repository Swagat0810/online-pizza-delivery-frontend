import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcouponsComponent } from './viewallcoupons.component';

describe('ViewallcouponsComponent', () => {
  let component: ViewallcouponsComponent;
  let fixture: ComponentFixture<ViewallcouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
