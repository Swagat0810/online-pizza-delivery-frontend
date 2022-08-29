import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecouponComponent } from './updatecoupon.component';

describe('UpdatecouponComponent', () => {
  let component: UpdatecouponComponent;
  let fixture: ComponentFixture<UpdatecouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
