import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesestudianteComponent } from './actividadesestudiante.component';

describe('ActividadesestudianteComponent', () => {
  let component: ActividadesestudianteComponent;
  let fixture: ComponentFixture<ActividadesestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
