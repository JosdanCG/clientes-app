import { Injectable } from '@angular/core';
import { LocalStorageJwt } from '../static/local-storage';
import jwt_decode from 'jwt-decode';
import { Ijwt } from '../static/auth';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
//servicio para administrar el token
export class JwtAuthService {
  constructor() {}

  login(token: string): void {
    const decode = jwt_decode<Ijwt>(token);
    localStorage.setItem(LocalStorageJwt.LS_ACCES_TOKEN, token);
    localStorage.setItem(
      LocalStorageJwt.LS_ROLES,
      JSON.stringify(decode.username)
    );
  }
}
