import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact';
import {ContactService} from "../services/contact.service";
import {Router} from "@angular/router";
import {ToolbarOptions} from "../../layout/toolbar/toolbar-options";
import {ToolbarService} from "../../layout/toolbar/toolbar.service";

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  onContactSelected(contact: Contact): void {
    //this.selectedContactName = contact.firstName + ' ' + contact.lastName;
    this.router.navigate(['/contacts/' + contact.id], {skipLocationChange: true})
  }

  onCreateNew(): void {
    this.router.navigate(['/contacts/new'])
  }

  ngOnInit() {
   this.contactService.get().subscribe(response => {
     this.contacts = response;
     console.log(response);
   });

   this.toolbar.setToolbarOptions(new ToolbarOptions(false, ' Contacts', []));
  }
}
