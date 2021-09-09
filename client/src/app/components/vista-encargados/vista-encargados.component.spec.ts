import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEncargadosComponent } from './vista-encargados.component';

describe('VistaEncargadosComponent', () => {
  let component: VistaEncargadosComponent;
  let fixture: ComponentFixture<VistaEncargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEncargadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEncargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
