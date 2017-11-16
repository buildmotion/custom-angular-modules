import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroverComponent } from './grover.component';

describe('GroverComponent', () => {
  let component: GroverComponent;
  let fixture: ComponentFixture<GroverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
