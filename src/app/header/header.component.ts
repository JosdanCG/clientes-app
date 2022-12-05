import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logo: string = 'assets/starry_night_icon_187793.ico';

  constructor(private router: Router) {}

  public home() {
    console.log('regresando a home');
    this.router.navigate(['/home']);
  }

  public catalogo() {
    console.log('cardd');
    this.router.navigate(['/home/cards']);
  }

  public admin() {
    this.router.navigate(['/admin']);
  }
  /**
   * cerrar sesion
   */
  public cerrarse() {
    console.log('funcionando');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
