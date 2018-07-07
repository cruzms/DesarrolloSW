import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarretosComponent } from './consultarretos.component';

describe('ConsultarretosComponent', () => {
  let component: ConsultarretosComponent;
  let fixture: ComponentFixture<ConsultarretosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarretosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
