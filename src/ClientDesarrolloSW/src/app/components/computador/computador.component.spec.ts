import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorComponent } from './computador.component';

describe('ComputadorComponent', () => {
  let component: ComputadorComponent;
  let fixture: ComponentFixture<ComputadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
