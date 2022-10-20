import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Injectable()
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices) {}

  

  empleados:Empleado[] = [];

  // empleados:Empleado[] = [
  //   new Empleado("Javier","Saez","Presidente",7500),
  //   new Empleado("Aleth","Doblas","Asesora",6300),
  //   new Empleado("Luis","Perez","Pelota",1500),
  //   new Empleado("Anatxa","Roger","Recepcionista",1400)
    

  // ];
  setEmpleados(misEmpleados:Empleado[]){

    this.empleados=misEmpleados;

  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }
  addEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: " + empleado.nombre + "\nApellido: " + empleado.apellido + "\nCargo: " + empleado.cargo + "\nSalario: " + empleado.salario)
    
      this.empleados.push(empleado); // metodo push para agregar al array      
      this.dataService.guardarEmpleados(this.empleados);  


  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado= this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(indice,empleado);

   
    

  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);    

    this.dataService.eliminarEmpleado(indice);

    if(this.empleados!=null){

      this.dataService.guardarEmpleados(this.empleados);
     
  

    }

    

  }

  
  
}

