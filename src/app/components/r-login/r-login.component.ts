import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-r-login',
  templateUrl: './r-login.component.html',
  styleUrls: ['./r-login.component.css']
})
export class RLoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private builder:FormBuilder) { }



  ngOnInit(): void {
    // this.loginForm.setValue({name:'wasim', email:'wasim@gmail.com', password:'12345678'})

    
 this.loginForm= this.builder.group({
    name:new FormControl('wasim',Validators.required),
    email:new FormControl('wasim@gmail.com',Validators.required),
    password:new FormControl('12345678',Validators.required)
  })
  }



  loginUser(){
    console.log(this.loginForm.value);
    
  }

}
