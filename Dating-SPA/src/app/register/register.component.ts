import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() ValuesFromHome: any;
  @Output() CancelRegister = new EventEmitter();

 model: any = {};

  constructor() { }

  ngOnInit() {

  }
  register(){
    console.log(this.model);

  }

  cancel(){
    this.CancelRegister.emit(false);
    console.log('Cancel Button CLicked');
  }

}
