import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { AdminComponent } from './admin/admin.component';
import { ClienteGuardChildGuard } from './guards/cliente-guard-child.guard';
import { CardsComponent } from './pages/cards/cards.component';
import { HomeRoutingModule } from './pages/page.module';
import { ClienteGuardCandloadGuard } from './guards/cliente-guard-candload.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    HomeComponent,
    LoginComponent,
    CardProductoComponent,
    AdminComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [
    VigilanteGuard,
    AdminComponent,
    ClienteGuardChildGuard,
    ClienteGuardCandloadGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
