import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  unamePattern = "^[a-z]{4}$";
  pwdPattern = "^[0-9]{4}$";
  // unamePattern = "^[a-z0-9_-]{8,15}$";
  // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  //mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted = null;
  
  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    //mobileNumber: ['', Validators.pattern(this.mobnumPattern)],
    //email: ['', Validators.pattern(this.emailPattern)],
  });

  constructor(private formBuilder:FormBuilder) { }

  checkUsernameAndPassword(ustr,pstr){
    let validations_form = this.formBuilder.group({
      username: new FormControl(ustr, Validators.compose([
        Validators.required,
        Validators.pattern(this.unamePattern)
      ])),
      password: new FormControl(pstr, Validators.compose([
        Validators.required,
        Validators.pattern(this.pwdPattern)
      ]))
    });
    console.log(validations_form.status)
  }
  
  
  
  
  checkPassword(str){
    if(str === "1234"){
      return true;
    }else{
      return false;
    }
  }

}
