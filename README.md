# Assignment 2

## Instructions

1. Add a Input field which updates a property ('username') via Two-Way-Binding
2. Output the username property via String Interpolation (in a paragraph below the input)
3. Add a button which may only be clicked if the username is NOT an empty string
4. Upon clicking the button, the username should be reset to an empty string

## Notes

### Step 1 - Add a Input field which updates a property ('username') via Two-Way-Binding

Adding two-way binding requires 
  app.component.ts
    this was already done for me
      import { FormsModule } from '@angular/forms';
      add 'FormsModule' to @NgModule imports array
  app.component.html
    (input)="onUpdateServerName($event)"
