import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgxPermissionsService } from 'ngx-permissions';

import { AuthService as Auth } from 'ng2-ui-auth';
import { AuthService } from '../auth/auth.service';
import { IUser } from 'app/model';

@Injectable()
export class SessionService {

  public me: IUser = <IUser>{};

  constructor(
    private authService: AuthService,
    public auth: Auth,
    private permissionService: NgxPermissionsService,
    private router: Router) {
  }

  start(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.isAuthenticated) {
        this.authService.getMe().subscribe(
          data => {
            this.permissionService.flushPermissions();
            this.me = data;
            this.permissionService.loadPermissions([this.me['role'] || 'MOTORISTA']);
            resolve(true);
          },
          error => {
            resolve(false);
          }
        );
      } else {
        resolve(true);
      }
    });
  }

  login(input): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.auth(input).subscribe(
        data => {
          this.auth.setToken(data['token']);
          this.onLogin().then(
            result => {
              resolve(true);
            }
          );
        },
        error => {
          resolve(false);
        });
    });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve) => {
      this.auth.logout().subscribe(
        data => {
          this.onLogout();
          resolve(true);
        },
        error => {
          resolve(false);
        });
    });
  }

  onLogin(): Promise<boolean> {
    return this.start();
  }

  onLogout() {
    this.permissionService.flushPermissions();
    this.me = null;
    this.router.navigate(['/auth']);
  }

  getMe() {
    return this.authService.getMe();
  }

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  get token() {
    return this.auth.getToken();
  }
}
