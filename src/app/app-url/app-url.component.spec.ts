import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUrlComponent } from './app-url.component';

describe('AppUrlComponent', () => {
  let component: AppUrlComponent;
  let fixture: ComponentFixture<AppUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
