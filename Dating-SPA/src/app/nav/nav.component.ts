import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  Login()
  {
    this.authservice.login(this.model).subscribe(next => {
      console.log('Successful');
    }, error => {
      console.log('Failed to Login');
    });
  }

  loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){

    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
