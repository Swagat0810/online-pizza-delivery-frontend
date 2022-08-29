import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpizzalistComponent } from './viewpizzalist.component';

describe('ViewpizzalistComponent', () => {
  let component: ViewpizzalistComponent;
  let fixture: ComponentFixture<ViewpizzalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpizzalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpizzalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
