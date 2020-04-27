import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any;
  @Output() CancelRegister = new EventEmitter();

 model: any = {};

  constructor(private authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {

  }
  register(){
    this.authservice.register(this.model).subscribe(next =>
      {
        this.alertify.success('Registration SUccessful');

      }, error => {
        this.alertify.error(error);
      });

  }

  cancel(){
    this.CancelRegister.emit(false);
    this.alertify.message('Cancel Button CLicked');
  }

}
