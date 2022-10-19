import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponentComponent } from './empleado-hijo-component/empleado-hijo-component.component';
import { CaracteristicasEmpleadoComponentComponent } from './caracteristicas-empleado-component/caracteristicas-empleado-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponentComponent,
    CaracteristicasEmpleadoComponentComponent
  ],
  imports: [
    BrowserModule,     
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
