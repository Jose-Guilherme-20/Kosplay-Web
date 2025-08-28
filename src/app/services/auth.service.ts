import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/Auth/login`, { username, password })
      .pipe(
        tap((tokens: { accessToken: string; refreshToken: string }) => {
          sessionStorage.setItem('access_token', tokens.accessToken);
          sessionStorage.setItem('refresh_token', tokens.refreshToken);
        })
      );
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('access_token');
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  refreshToken() {
    const refreshToken = sessionStorage.getItem('refresh_token');
    if (!refreshToken) {
      this.logout();
      return;
    }
    return this.http
      .post<any>(`${environment.apiUrl}/api/Auth/refresh-token`, {
        refreshToken,
      })
      .pipe(
        tap((tokens) => {
          sessionStorage.setItem('access_token', tokens.accessToken);
          sessionStorage.setItem('refresh_token', tokens.refreshToken);
        })
      );
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }

  register(user: User) {
    return this.http.post<any>(`${environment.apiUrl}/api/Auth/register`, user);
  }
}
