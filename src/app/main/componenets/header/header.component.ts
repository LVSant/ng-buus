import { AuthService, SessionService } from 'app/core/service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: IUser;

  constructor(private sessionService: SessionService) {
    this.sessionService.getMe().subscribe(data => {
      this.user = data;
      console.log('construck header user', this.user);
    });
  }

  logout() {
    this.sessionService.logout();
  }

  ngOnInit() {
  }

}
