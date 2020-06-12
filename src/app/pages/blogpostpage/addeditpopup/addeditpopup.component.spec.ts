import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpopupComponent } from './addeditpopup.component';

describe('AddeditpopupComponent', () => {
  let component: AddeditpopupComponent;
  let fixture: ComponentFixture<AddeditpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
