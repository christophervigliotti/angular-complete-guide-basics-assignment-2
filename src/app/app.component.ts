import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // properties
  allowAddUsername = false;
  username = '';
  userCreationStatus = 'no user created...yet';

  //methods 
  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateUser(){
    console.log('onCreateUser()');
    this.userCreationStatus = 'User "' + this.username + '" created.';    
  }

  onUpdateUsername(event: any){
    console.log('onUpdateUsername()' + event.target.value);
    this.username = (<HTMLInputElement>event.target).value; 
  }
}
