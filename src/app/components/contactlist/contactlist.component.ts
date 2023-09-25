import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactComponent } from '../contact/contact.component';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

   isPopupOpened=true;
  constructor(public dialog: MatDialog,
    private _contactService:ContactService) { }

  ngOnInit(): void {
  }

  get contactList(){
return this._contactService.getAllContacts();
  }

  addContact(){
    const dialofRef=this.dialog.open(ContactComponent,{
      data: {}
    })
  }

}
