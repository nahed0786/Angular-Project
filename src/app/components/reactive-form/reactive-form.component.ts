// import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit {
//   myForm: FormGroup;
//   displayedData: string[] = [];
  

//   constructor(private formBuilder: FormBuilder) {
//     this.myForm = this.formBuilder.group({
//       Name:new FormControl('',Validators.required),
//     });
//   }

//   ngOnInit(): void {
//   }

//   onSubmit() {
//     if (this.myForm.valid) {
//       const inputData = this.myForm.value.Name;
//       this.displayedData.push(inputData);
//       this.myForm.reset();
//     }
//   }

//   removeData(index: number) {
//     this.displayedData.splice(index, 1);
//   }


// }






// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit {
//   myForm: FormGroup;
//   displayedData: string[] = [];
  

//   constructor(private formBuilder: FormBuilder) {
//     this.myForm = this.formBuilder.group({
//       Name:new FormControl('',Validators.required),
//     });
//   }

//   ngOnInit(): void {
//   }

//   onSubmit() {
//    if(this.myForm.get('Name').value){
//     this.displayedData.push(this.myForm.get('Name').value);
//     this.myForm.addControl(this.myForm.get('Name').value,new FormControl(''))
//    }
//    console.log(this.myForm.value);
   
//   }

//   removeData(index: number) {
//     this.displayedData.splice(index, 1);
//   }


// }









import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  displayedData: string[] = [];
  

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      Name:new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
   if(this.myForm.get('Name').value){
    this.displayedData.push(this.myForm.get('Name').value);
    this.myForm.addControl(this.myForm.get('Name').value,new FormControl(''))
   }
   
   
  }
  removeField(index: number) {
    const fieldName = `field${index + 1}`;
    this.displayedData.splice(index, 1);
    this.myForm.removeControl(fieldName);
  }

}