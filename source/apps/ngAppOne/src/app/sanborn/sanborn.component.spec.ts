import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanbornComponent } from './sanborn.component';

describe('SanbornComponent', () => {
  let component: SanbornComponent;
  let fixture: ComponentFixture<SanbornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanbornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanbornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
