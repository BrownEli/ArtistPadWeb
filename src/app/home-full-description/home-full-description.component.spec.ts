import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFullDescriptionComponent } from './home-full-description.component';

describe('HomeFullDescriptionComponent', () => {
  let component: HomeFullDescriptionComponent;
  let fixture: ComponentFixture<HomeFullDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFullDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
