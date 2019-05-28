import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {MatInputModule, MatListModule, MatSnackBarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AvatarModule} from "ngx-avatar";
import {RouterModule, Routes} from "@angular/router";
import {MatSidenavModule} from "@angular/material";
import {MatToolbarModule} from "@angular/material";
import {ContactService} from "./contact/services/contact.service";
import {ContactHttpService} from "./contact/services/contact-http.service";
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: 'contacts', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDetailComponent,
    ToolbarComponent
  ],
  imports: [
    AvatarModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactHttpService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
