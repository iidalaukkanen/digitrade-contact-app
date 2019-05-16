import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContactWebApp';
  message = '';

  onButtonClick() {
    console.log('Termos!');
    this.message = 'Morjos!';
  }
}
