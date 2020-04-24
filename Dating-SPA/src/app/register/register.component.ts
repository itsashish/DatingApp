import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any;
  @Output() CancelRegister = new EventEmitter();

 model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {

  }
  register(){
    this.authservice.register(this.model).subscribe(next => 
      {
        console.log('Registration SUccessful');

      }, error =>{
        console.log(error);
      })

  }

  cancel(){
    this.CancelRegister.emit(false);
    console.log('Cancel Button CLicked');
  }

}
