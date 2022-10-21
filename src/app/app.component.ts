import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='';
  
  constructor(private loginService:LoginService){
    
   
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAZOUru9xxCxT_-KgLOVndb0Qs1MJ_FtRY",
      authDomain: "mis-clientes-da68b.firebase.com",
    })
    
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }
  logout(){
    this.loginService.logout();
  }



}


