import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  differentPassword = '';
  userModel = new User('', '', '', '', '');
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.validatePassword();
    console.log('this.differentPassword',this.differentPassword);
  }

  validatePassword(){
    console.log(this.userModel.password,this.userModel.confirmPassword);

    if(this.userModel.password=='' || this.userModel.confirmPassword==''){
      this.differentPassword = 'Password or Confirm Password cannot be blank.';
      return;
    } 

    if(this.userModel.password==this.userModel.confirmPassword){
      this.differentPassword = '';
    }else{
      this.differentPassword = 'Confirm password doesn\'t match with password entered.';
    }
    return;
  }
}
