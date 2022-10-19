import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  
  constructor(private miServicio:ServicioEmpleadosService){}

  addCaracteristica(value:string){
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);
  }

  
  ngOnInit(): void {
  }

}
