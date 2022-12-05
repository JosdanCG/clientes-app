import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ username, password }: { username: string; password: string }) {
    return this.http.get(
      `https://jwt-mock-server.onrender.com/jwt/token?username=${username}&pass=${password}&authorities=AUTH_WP2`
    );
  }
}
