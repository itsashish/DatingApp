import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerflag = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalue();
  }

  registertoggle(){
    this.registerflag = !this.registerflag;
  }
  getvalue(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
  CancelRegistermode(registerflag: boolean)
  {
    this.registerflag = registerflag;
  }

}
