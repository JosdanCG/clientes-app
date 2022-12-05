import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteGuardChildGuard } from '../guards/cliente-guard-child.guard';
import { VigilanteGuard } from '../guards/vigilante.guard';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ClientesComponent } from '../clientes/clientes.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate:[VigilanteGuard],
    //canActivateChild:[ClienteGuardChildGuard],
    children: [
      {
        path: '',
        component: ClientesComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class HomeRoutingModule {}
