import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactHttpService} from "./contact-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*this.contacts = [
      new Contact('Aksu', 'Tiksu', '0503395919', 'aki.tiainen@student.saimia.fi', 'Kannelkatu 10A 8', '53100', 'Lappeenranta'),
      new Contact('Iita', 'Laukkis', '0451229755', 'iida.laukkanen@student.saimia.fi', 'Teknologiapuistonkatu 4D 42','53850', 'Lappeenranta'),
      new Contact('Tofi', 'Kisse', '<3', 'tofi.kisse@miukumauku.fi', 'Tanhumäentie 27B', '04420', 'Järvenpää')
    ];*/

  }

  get(): Observable<Contact[]>{
    //return this.contacts;
    return this.contactHttpService.get();
  }
}
