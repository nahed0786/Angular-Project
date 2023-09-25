import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-login',
  templateUrl: './t-login.component.html',
  styleUrls: ['./t-login.component.css']
})
export class TLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  userLogin(item:any){
    console.log(item);
    
  }






  

}
