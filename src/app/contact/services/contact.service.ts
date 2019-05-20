import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Aki', 'Ankka', '0503395919'),
      new Contact('Iita', 'Ankka', '0451229755'),
      new Contact('Tofi', 'Ankka', '<3')
    ];
  }

  get(): Contact[]{
    return this.contacts;
  }
}
