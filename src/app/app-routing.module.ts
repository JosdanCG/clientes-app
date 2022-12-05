import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { ClienteGuardChildGuard } from './guards/cliente-guard-child.guard';
//import { HomeRoutingModule } from './pages/page.module';
import { HomeRoutingModule } from './pages/page.module';
import { ClienteGuardCandloadGuard } from './guards/cliente-guard-candload.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    //ruta de carga perezosa
    loadChildren: () =>
      import('./pages/page.module').then((m) => m.HomeRoutingModule),
    canLoad: [ClienteGuardCandloadGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), HomeRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
