import { Injectable } from '@angular/core';
import {LoginResponse} from '@nx-angular/util-interface';

@Injectable({
  providedIn: 'root'
})
export class StorageLoginService {
  private _loginResponse: LoginResponse;

  get loginResponse(): LoginResponse {
    return this._loginResponse;
  }
  set loginResponse(loginResponse: LoginResponse) {
    this._loginResponse = Object.assign(<LoginResponse>{}, loginResponse);
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }

  public clear(): void {
    this.loginResponse = undefined;
  }
}
