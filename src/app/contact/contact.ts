export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  city: string;

constructor(firstName?: string, lastName?: string, phone?: string, email?:string, streetAddress?: string, postalCode?:string, city?: string) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
  this.streetAddress = streetAddress;
  this.postalCode = postalCode;
  this.city = city;
  }
}
