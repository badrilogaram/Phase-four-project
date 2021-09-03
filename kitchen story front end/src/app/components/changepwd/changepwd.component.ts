import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iadmincredentials } from 'src/app/interfaces/iadmincredentials';
import { AuthService } from 'src/app/services/auth.service';
import { Customvalidators } from 'src/app/validators/customvalidators';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  public changepwdForm: FormGroup;
  public submitted = false;
  adminCreds : Iadmincredentials = {};
  updateCreds : Iadmincredentials = {};

  resCreds : Iadmincredentials = {};
 // id : number = 1;
  invalidLogin: boolean = false;
  pwdmismatch : boolean = false;

  success : boolean = true;

  constructor(private router: Router,private loginservice : AuthService)
  { 
    this.changepwdForm = new FormGroup({
      username : new FormControl("", [Validators.required,Customvalidators.notOnlyWhitespace]),
      oldpassword : new FormControl("", [Validators.required,Customvalidators.notOnlyWhitespace]),
      newpassword : new FormControl("", [Validators.required,Validators.minLength(8),Customvalidators.notOnlyWhitespace]),
      confirmpassword : new FormControl("", [Validators.required,Validators.minLength(8),Customvalidators.notOnlyWhitespace])
    });
  }

  ngOnInit(): void {
  }

  get formControl() {
    return this.changepwdForm.controls;
  }

 
  changepwd()
  {
    this.submitted = true;
    if (this.changepwdForm.valid)
    {
      if(this.changepwdForm.controls['newpassword'].value === this.changepwdForm.controls['confirmpassword'].value)
      {
        this.pwdmismatch =false;
        this.adminCreds.username =this.changepwdForm.controls['username'].value;
        this.adminCreds.pword=this.changepwdForm.controls['oldpassword'].value;
        this.loginservice.authenticate(this.adminCreds).subscribe(
          data => {
            console.log(data);
            
            if(data === null)
            {
               this.invalidCreds();
            }
            else
            {
              this.resCreds = data;
              this.updatecredents();
            }
          },
          error => {
            console.log('Got database error while validating credentials',error);
          }
        );
      }
      else
      {
        this.submitted = false;
        this.pwdmismatch = true;
      }
     
    }
  }

  invalidCreds()
  {
    this.submitted = false;
    this.changepwdForm.reset();
    this.invalidLogin = true;
  }
  updatecredents()
  {
    this.invalidLogin = false;
            this.updateCreds.username = this.changepwdForm.controls['username'].value;
            this.updateCreds.pword =  this.changepwdForm.controls['newpassword'].value;

            this.loginservice.updateCredentials(this.resCreds.loginid,this.updateCreds).subscribe(
              resdata => {
                console.log(resdata);
                //alert("Password updated successfully!!Please login using new credentials");
                this.router.navigate(["/adminLogin"], {queryParams: {msg: this.success}});
              },
              error => {
                console.log('Got database error while updating credentials',error);
              }
            );
  }
}
