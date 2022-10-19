import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[] = [];

  accion:number;

  isDivVisible:string;
  isDivVisible1:string;
  
  ngOnInit(): void {
    this.empleados= this.empleadosService.empleados;

    this.indice= this.route.snapshot.params['id'];

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

    if(this.accion==1){

      this.isDivVisible="block";
  
      this.isDivVisible1="none";
    }else{
      this.isDivVisible="none";
  
      this.isDivVisible1="block";

    }


  }

  volverHome(){

    this.router.navigate(['']);

  }
  

  // actualizaEmpleado(){
  //   let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  //   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + "\nApellido: " + miEmpleado.apellido + "\nCargo: " + miEmpleado.cargo + "\nSalario: " + miEmpleado.salario)
  //   this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
  //   // redireccionar
  //   this.router.navigate(['']);
  // } 
  // eliminaEmpleado(){
   
  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   // redireccionar
  //   this.router.navigate(['']);

  // }
  actualizaEmpleado(){
    if(this.accion==1){   
      let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + "\nApellido: " + miEmpleado.apellido + "\nCargo: " + miEmpleado.cargo + "\nSalario: " + miEmpleado.salario)
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      // redireccionar
      this.router.navigate(['']);
    }else{      
      this.empleadosService.eliminarEmpleado(this.indice);
  // redireccionar
      this.router.navigate(['']);

    }

    
  


    } 

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;

}
function mod(mod: any) {
  throw new Error('Function not implemented.');
}

