import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColtraneComponent } from './coltrane.component';

describe('ColtraneComponent', () => {
  let component: ColtraneComponent;
  let fixture: ComponentFixture<ColtraneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColtraneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColtraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
