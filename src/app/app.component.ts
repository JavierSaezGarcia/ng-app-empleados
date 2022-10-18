import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-empleados';
  empleados:Empleado[] = [
    new Empleado("Javier","Saez","Presidente",7500),
    new Empleado("Aleth","Doblas","Asesora",6300),
    new Empleado("Luis","Perez","Pelota",1500),
    new Empleado("Anatxa","Roger","Recepcionista",1400),
    new Empleado("Laura","Narvaez","Developer",3000),

  ]
}
