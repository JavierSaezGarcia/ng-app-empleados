import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


@Injectable()
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }
  empleados:Empleado[] = [
    new Empleado("Javier","Saez","Presidente",7500),
    new Empleado("Aleth","Doblas","Asesora",6300),
    new Empleado("Luis","Perez","Pelota",1500),
    new Empleado("Anatxa","Roger","Recepcionista",1400)
    

  ];
  addEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: " + empleado.nombre + "\nApellido: " + empleado.apellido + "\nCargo: " + empleado.cargo + "\nSalario: " + empleado.salario)
    
      this.empleados.push(empleado); // metodo push para agregar al array
    
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

  }
  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);
    

  }

  
}
