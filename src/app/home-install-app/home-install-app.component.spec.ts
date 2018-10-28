import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstallAppComponent } from './home-install-app.component';

describe('HomeInstallAppComponent', () => {
  let component: HomeInstallAppComponent;
  let fixture: ComponentFixture<HomeInstallAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInstallAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstallAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
