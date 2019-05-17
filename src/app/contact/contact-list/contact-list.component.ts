import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts = [
      new Contact('Aki', 'Ankka', '0503395919'),
      new Contact('Iita', 'Ankka', '0451229755'),
      new Contact('Tofi', 'Ankka', '<3')
    ];
    console.log(this.contacts);
  }
}
