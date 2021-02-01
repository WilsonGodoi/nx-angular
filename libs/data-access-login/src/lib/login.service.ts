import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '@nx-angular/util-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly BASE_URL: string = 'login/';

  constructor(private http: HttpClient) {}

  public doLogin(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}`, loginRequest);
  }
}
