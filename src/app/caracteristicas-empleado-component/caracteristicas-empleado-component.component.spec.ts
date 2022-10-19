import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadoComponentComponent } from './caracteristicas-empleado-component.component';

describe('CaracteristicasEmpleadoComponentComponent', () => {
  let component: CaracteristicasEmpleadoComponentComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpleadoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
