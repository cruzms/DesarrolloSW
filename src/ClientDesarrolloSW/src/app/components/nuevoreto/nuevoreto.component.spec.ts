import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoretoComponent } from './nuevoreto.component';

describe('NuevoretoComponent', () => {
  let component: NuevoretoComponent;
  let fixture: ComponentFixture<NuevoretoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoretoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
