import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 
  parentForm: FormGroup;
  genderOptions: string[] = ['Male', 'Female', 'Other'];
  showChild: boolean = false;
  submittedData: any;
 
  constructor(private formBuilder: FormBuilder) {
    this.parentForm = this.formBuilder.group({
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.parentForm.valid) {
      this.submittedData = this.parentForm.value;
    }
    console.log( this.submittedData);
    
  }

  showChildComponent() {
    this.showChild = true;   
  }

}
