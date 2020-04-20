import { Component, ViewChild } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { };

  title = 'portfolioProjectManagement';
  public appName = 'Transaction Management';
  loginSuccess = 'false';

  receiveMessage($event) {
    this.loginSuccess = $event
    if(this.loginSuccess=='true'){
      this.router.navigate(['/content']);
    }
  }

}


