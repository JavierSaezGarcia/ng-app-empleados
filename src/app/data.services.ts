import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient, private loginService:LoginService){}

    cargarEmpleados(){
        
        const token=this.loginService.getIdToken();

        return this.httpClient.get('https://mis-clientes-da68b-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://mis-clientes-da68b-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe({

            next: (v) => console.log("Se han guardado los empleados: " + v),

            error: (e)=> console.log('Error: ' + e)
        });
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url='https://mis-clientes-da68b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe({

            next: (v) => console.log("Se ha modificado correctamente el empleado: " + v),

            error: (e)=> console.log('Error: ' + e)
        });

        
    }

    eliminarEmpleado(indice:number){

        let urlDelete='https://mis-clientes-da68b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
        this.httpClient.delete(urlDelete).subscribe({

            next: (v) => console.log("Se ha eliminado correctamente el empleado: " + v),

            error: (e)=> console.log('Error: ' + e)
        });

    }

}