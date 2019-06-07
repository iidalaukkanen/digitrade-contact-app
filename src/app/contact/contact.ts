export class Contact {
  id: any;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  postalCode: string;
  city: string;

constructor(id?: any, firstName?: string, lastName?: string, phone?: string, email?:string, streetAddress?: string, postalCode?:string, city?: string) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phone;
  this.emailAddress = email;
  this.streetAddress = streetAddress;
  this.postalCode = postalCode;
  this.city = city;
  }
}
