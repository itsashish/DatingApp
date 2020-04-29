import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string;
  constructor(private authservice: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.username = this.authservice.getUserName();
  }
  Login()
  {
    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('Successful');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/list']);

    });
  }

  loggedin(){
    return this.authservice.loggedin();
  }

  logout(){

    localStorage.removeItem('token');
    this.alertify.warning('Logged Out');
    this.router.navigate(['/home']);

  }
}
