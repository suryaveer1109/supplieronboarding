import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  loginSuccess = 'true';

  @Output() messageEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.loginSuccess = 'false';
    this.messageEvent.emit(this.loginSuccess);
  }

  loginUser() {
    this.loginSuccess = 'true';
    this.messageEvent.emit(this.loginSuccess);
  }
}
