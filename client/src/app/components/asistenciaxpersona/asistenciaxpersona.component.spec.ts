import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaxpersonaComponent } from './asistenciaxpersona.component';

describe('AsistenciaxpersonaComponent', () => {
  let component: AsistenciaxpersonaComponent;
  let fixture: ComponentFixture<AsistenciaxpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaxpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaxpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
