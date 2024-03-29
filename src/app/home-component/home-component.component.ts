import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de Empleados';
 
  
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService,private router:Router) { 
    // se puede hacer asi desde el constructor o implementandolo en el metodo OnInit e insertarlo ahi para rellenar el array
    //this.empleados= this.empleadosService.empleados;
    
    
  }
 
  empleados:Empleado[] = [];

  ngOnInit(): void {
    //this.empleados= this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
      this.empleados=Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });

    

    

    
  }
  
  

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


