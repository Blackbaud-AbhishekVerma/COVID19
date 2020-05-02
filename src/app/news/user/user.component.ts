import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/user-login.service'
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  loginForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  errorMessage: string;
  invalid: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': this.emailFormControl,
      'password': this.passwordFormControl
    });
  } 

    onSubmit(){
      if(!this.loginForm.invalid){
        if(this.loginService.authenticate(this.emailFormControl.value,this.passwordFormControl.value)){
                this.router.navigate(['/news'])
                this.invalid=false
                this.errorMessage="";       
              }
              else{
                this.errorMessage="Inavlid credientials";
                this.invalid=true;
              }
      } 
      else{
        this.errorMessage ="Vaidation Errors"
        this.invalid=true;
      }     
    }
    
    onCancel(){
      this.router.navigate(['/news']);
    }
    
}
