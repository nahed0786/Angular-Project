import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-confirmpassword',
  templateUrl: './password-confirmpassword.component.html',
  styleUrls: ['./password-confirmpassword.component.css']
})
export class PasswordConfirmpasswordComponent implements OnInit {


  form:FormGroup = new FormGroup({});
  constructor(private FB: FormBuilder) {
    this.form=FB.group({
      password:['',[Validators.required]],
      confirm_password:['',[Validators.required]]
    }, 
    {Validators:this.passwordMatch}
    )

   }
   SaveForm(){
  if(this.form.valid){
console.log(this.form.value);

  }else{
    console.log('Form is invalid' );
    
  }
   }

   get f(){
    return this.form.controls;
   }


  ngOnInit(): void {
  }

passwordMatch(formGroup:FormGroup){
const password = formGroup.get('password').value;
const confirmPassowrds = formGroup.get('confirm_password').value;

if(password === confirmPassowrds){
  return null;
}else{
  return { mismatch: true}
}
}


}
