import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void { }

  /**
   * Open user registration dialog
   * @function openUserRegistrationDialog
   * @returns registerUser component
  */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {width: '280px'});
  }

  /**
   * Open user login dialog
   * @function openLoginDialog
   * @returns loginUser component
  */  
  openLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {width: '280px'});
  }
}
