import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email= "";
  password="";
  isVisible=false;
  constructor (private router:Router){
  };
  
  public ingresar(){
    console.log(this.email, this.password);
    //vamos a crtear una variable para localstorage
    if (this.email == "user@gmail.com" && this.password== "123"){
      console.log("exito")
      localStorage.setItem("user",this.email)
      this.router.navigate(['/home'])
      
    }
    if (this.email != "user" && this.password != "123") {
      console.log("fallido")
      this.isVisible = true
    }
  }
}
