import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-component',
  templateUrl: './empleado-hijo-component.component.html',
  styleUrls: ['./empleado-hijo-component.component.css']
})
export class EmpleadoHijoComponentComponent implements OnInit {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;
  constructor(){}

  ngOnInit(): void {
  }

}
