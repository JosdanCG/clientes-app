import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}

  public home() {
    this.router.navigate(['/home']);
  }
  public cerrar() {
    console.log('funcionando');
    localStorage.removeItem('admin');
    this.router.navigate(['/login']);
  }
}
