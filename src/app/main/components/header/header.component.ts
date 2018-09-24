import { AuthService, SessionService } from 'app/core/service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public user: IUser;
  public navbarOpen = false;


  constructor(private authService: AuthService,
    private sessionService: SessionService,
    private router: Router) {
    this.authService.getMe().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    this.sessionService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
