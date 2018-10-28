import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShortDescriptionComponent } from './home-short-description.component';

describe('HomeShortDescriptionComponent', () => {
  let component: HomeShortDescriptionComponent;
  let fixture: ComponentFixture<HomeShortDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShortDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
