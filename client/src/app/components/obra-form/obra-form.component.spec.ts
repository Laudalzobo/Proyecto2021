import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraFormComponent } from './obra-form.component';

describe('ObraFormComponent', () => {
  let component: ObraFormComponent;
  let fixture: ComponentFixture<ObraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
