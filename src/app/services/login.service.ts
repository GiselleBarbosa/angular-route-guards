import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public login(): void {
    localStorage.setItem('token', '123456');
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
