import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';
  formulario = 'Formulario inscripcion';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    // se puede hacer asi desde el constructor o implementandolo en el metodo OnInit e insertarlo ahi para rellenar el array
    //this.empleados= this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados= this.empleadosService.empleados;
  }

  empleados:Empleado[] = [];

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + "\nApellido: " + miEmpleado.apellido + "\nCargo: " + miEmpleado.cargo + "\nSalario: " + miEmpleado.salario)
    this.empleadosService.addEmpleadoServicio(miEmpleado);
  } 

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}

