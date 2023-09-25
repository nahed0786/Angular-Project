import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    const sessionname = localStorage.getItem('session');
    const rememberme = !!sessionname;

    if (rememberme) {
      this.sessionForm.patchValue({
        sessionname: sessionname,
        remember: true
      })
    }

  }
  sessionForm = new FormGroup({
    sessionname: new FormControl(" ", [Validators.required]),
    remember: new FormControl(false)

  })
  set() {
    if (this.sessionForm.value.remember) {
      localStorage.setItem('session', this.sessionForm.value.sessionname)
    } else {
      localStorage.removeItem('session')
    }
  }



}
