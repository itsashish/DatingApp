import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string;
  constructor(private authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.username = this.authservice.getUserName();
  }
  Login()
  {
    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('Successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedin(){
    return this.authservice.loggedin();
  }

  logout(){

    localStorage.removeItem('token');
    this.alertify.warning('Logged Out');
  }
}
