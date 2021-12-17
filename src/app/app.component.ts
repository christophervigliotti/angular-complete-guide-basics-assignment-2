import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  onUsernameUpdate(event: any){
    console.log('Username: ' + event.target.value);
    this.username = (<HTMLInputElement>event.target).value;
  }
}
