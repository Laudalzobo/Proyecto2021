import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaExtendidaComponent } from './vista-extendida.component';

describe('VistaExtendidaComponent', () => {
  let component: VistaExtendidaComponent;
  let fixture: ComponentFixture<VistaExtendidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaExtendidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaExtendidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
