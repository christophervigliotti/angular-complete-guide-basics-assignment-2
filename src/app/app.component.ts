import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowAddUsername = false;
  username = '';
  onUsernameUpdate(event: any){
    var usernameValue = (<HTMLInputElement>event.target).value; // good practice to declare var here or just to use this scope?
    // console.log('Username: ' + event.target.value);
    // console.log(usernameValue.length);
    this.username = usernameValue;
    this.addUserButtonStateHandler(usernameValue);
  }

  onUpdateUserButtonClick(){
    this.username = '';
    this.addUserButtonStateHandler('');
  }

  addUserButtonStateHandler(usernameValue){
    this.allowAddUsername = (usernameValue.length > 0)?true:false;
  }
}
