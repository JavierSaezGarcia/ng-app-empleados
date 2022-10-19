import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  addCaracteristica(value:string){
    this.caracteristicasEmpleado.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
