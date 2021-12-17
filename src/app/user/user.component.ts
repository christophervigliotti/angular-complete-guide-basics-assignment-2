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
  userCreationStatus = 'User not created.'; // (30)
  userName = '';

  //methods 
  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateUser(){
    this.userCreationStatus = 'User "' + this.userName + '" was created.';
    this.userName = '';
  }

  onUpdateUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
    // this.allowNewUser = (this.userName.length > 0)?true:false;
  }

}
