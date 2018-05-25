import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarmateriasComponent } from './consultarmaterias.component';

describe('ConsultarmateriasComponent', () => {
  let component: ConsultarmateriasComponent;
  let fixture: ComponentFixture<ConsultarmateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarmateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarmateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
