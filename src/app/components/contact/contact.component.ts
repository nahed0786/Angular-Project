import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm?:FormGroup;
  
  // public _contactForm: formGroup;
  constructor(private _formBuilder: FormBuilder,
    private dialofRef: MatDialogRef<ContactComponent>,
    private _contactService: ContactService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialofRef.close();
  }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      ID: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]],
    })
  }

  onsubmit() {
    this._contactService.addContact(this.contactForm?.value)
  }



}
