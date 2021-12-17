import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // properties
  allowNewUser = false;
  userCreationStatus = 'No user was created...sorry, Charlie!'; // (30)
  userName = '(34) this is the default value of userName ';

  //methods 
  constructor() {
    setTimeout(
      () => {
        this.allowNewUser = true;
      }, 
      2000
    );
   }
  ngOnInit(): void {
  }

  // (30)
  onCreateUser(){
    this.userCreationStatus = 'User "' + this.userName + '" was created. Nice work, yo.';
  }

  // (32)
  onUpdateUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
