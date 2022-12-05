import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'julio',
      apellido: 'Dulanto',
      email: 'j@email.com',
      createAt: '2022-11-24',
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Diaz',
      email: 'm@gmail.com',
      createAt: '2022-11-20',
    },
    {
      id: 3,
      nombre: 'Selene',
      apellido: 'Torres',
      email: 's@gmail.com',
      createAt: '2022-10-30',
    },
  ];
  isAdmin = false;

  public test() {
    // if(this.isAdmin===false){
    //   this.isAdmin=true;
    //   console.log("true")
    //   return
    // }if(this.isAdmin===true){
    //   this.isAdmin=false;
    //   console.log("false")
    // }
    this.isAdmin = !this.isAdmin;
  }
}
