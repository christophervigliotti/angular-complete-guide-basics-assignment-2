# Assignment 2

## 1. Add a Input field which updates a property ('username') via Two-Way-Binding
- &lt;input type="text" class="form-control" [(ngModel)]="userName"/&gt;
## 2. Output the username property via String Interpolation (in a paragraph below the input)
- added to html...
  userName: {{userName}} 
## 3. Add a button which may only be clicked if the username is NOT an empty string
- added to button...
  [disabled]="userName === ''" 
## 4. Upon clicking the button, the username should be reset to an empty string
- (click)="onCreateUser()"