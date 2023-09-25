import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Output() childDataEvent = new EventEmitter<any>();
  childForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.childForm = this.formBuilder.group({
      name: '',
      age: '',
      email: ''
    });
  }

  ngOnInit(): void {
   
  }

  submitForm() {
    if (this.childForm.valid) {
      const formData = this.childForm.value;
      this.childDataEvent.emit(formData);
    }
  }





}
