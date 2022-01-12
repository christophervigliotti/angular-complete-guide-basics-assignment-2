# Assignment 2

*This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)".  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

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
