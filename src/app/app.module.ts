import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponentComponent } from './empleado-hijo-component/empleado-hijo-component.component';
import { CaracteristicasEmpleadoComponentComponent } from './caracteristicas-empleado-component/caracteristicas-empleado-component.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';


// creas una constante para las rutas
const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'login', component:LoginComponent},
  // los dos asteriscos es un comodin que angular le dice que todo lo que no sea lo anterior es la pagina de rrror
  {path:'**', component:ErrorPersonalizadoComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponentComponent,
    CaracteristicasEmpleadoComponentComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    LoginComponent,
    ErrorPersonalizadoComponent
    
  ],
  imports: [
    BrowserModule,     
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
