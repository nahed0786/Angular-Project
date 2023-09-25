import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  _contactlist: Contact[] = []

  constructor() { }


  addContact(Contact: Contact) {
    this._contactlist.push(Contact);
  }


  removeContact(id: number) {
    const contact = this._contactlist.findIndex(c => c.Id === id);
    this._contactlist.splice(contact, 1);
  }

  getAllContacts(){
    return this._contactlist;
  }
}
