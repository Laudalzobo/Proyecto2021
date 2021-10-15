import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaExtendidaEncargadoComponent } from './vista-extendida-encargado.component';

describe('VistaExtendidaEncargadoComponent', () => {
  let component: VistaExtendidaEncargadoComponent;
  let fixture: ComponentFixture<VistaExtendidaEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaExtendidaEncargadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaExtendidaEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
