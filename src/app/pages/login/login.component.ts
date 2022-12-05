import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  isVisible = false;

  constructor(
    private router: Router,
    private _jwtAuthS: JwtAuthService,
    private loginservice: LoginService
  ) {}

  public ingresar() {
    console.log(this.email, this.password);

    //vamos a crtear una variable para localstorage
    if (this.email == 'usuario' && this.password == '123') {
      this.loginservice
        .login({
          username: this.email,
          password: this.password,
        })
        .subscribe((data) => {
          const { token } = data as any;
          localStorage.setItem('token', token);
          console.log('value', data);
        });
      localStorage.setItem('user', this.email);
      this.router.navigate(['/home']);
    } else if (this.email == 'administrador' && this.password == '123') {
      console.log('exito');

      //localStorage.setItem("admin",this.email)
      this.router.navigate(['/admin']);
    }
    //if (this.email != "user" && this.password != "123") {
    else {
      console.log('fallido');
      this.isVisible = true;
    }
  }
}
