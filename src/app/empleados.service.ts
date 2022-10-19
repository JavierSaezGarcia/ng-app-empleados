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
    if (confirm() == true) {
      this.empleados.push(empleado); // metodo push para agregar al array
    }else{
      alert("Empleado no insertado")
    } 
    
  }

  
}
