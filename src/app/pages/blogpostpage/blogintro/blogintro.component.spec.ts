import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogintroComponent } from './blogintro.component';

describe('BlogintroComponent', () => {
  let component: BlogintroComponent;
  let fixture: ComponentFixture<BlogintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
