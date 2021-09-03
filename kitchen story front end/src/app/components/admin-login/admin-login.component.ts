import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadmincredentials } from 'src/app/interfaces/iadmincredentials';
import { AuthService } from 'src/app/services/auth.service';
import { Customvalidators } from 'src/app/validators/customvalidators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  /* loginForm: FormGroup; */
  public loginForm: FormGroup;
  public submitted = false;
  
  adminCreds : Iadmincredentials = {};
  invalidLogin: boolean = false;
  message : boolean;
  //uname : string = '';
  constructor(private router: Router,private loginservice : AuthService, private activatedroute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required,Customvalidators.notOnlyWhitespace]),
      password: new FormControl("", [Validators.required,Customvalidators.notOnlyWhitespace])
    }); 
   /*  this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["",[Validators.required]]
    }); */
      this.message = false;
      this.activatedroute.queryParams.subscribe(data => {
        this.message = data.msg;
      })
   }

  ngOnInit(): void {
    
  }

  /* submitForm() {
    console.log(this.loginForm.getRawValue());
  } */

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void 
  {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) 
    {
      this.adminCreds.username =this.loginForm.controls['username'].value;
      this.adminCreds.pword=this.loginForm.controls['password'].value;
      //localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
     /*  if (this.loginservice.authenticate(this.uname, this.passwd)) 
      {
        this.router.navigate(["/adminDashboard/listfooditem"]);
        this.invalidLogin = false
    }  
    else
    {
      //this.loginForm.reset();
      //this.submitted
      this.invalidLogin = true
      
    }      */

    this.loginservice.authenticate(this.adminCreds).subscribe(
      data => {
        console.log(data);
        if(data === null)
        {
          this.submitted = false;
          this.invalidLogin = true;
          this.loginForm.reset(this.loginForm.value.username);
          this.loginForm.reset(this.loginForm.value.password);
        }
        else
        {
          this.invalidLogin = false;
         // this.uname = data.username.;
         // sessionStorage.setItem('username', data)
          this.router.navigate(["/adminDashboard/listfooditem"]);
        }
      },
      error => {
        console.log('Got database error while validating credentials',error);
      }
    );

  }

      
    }
  }

