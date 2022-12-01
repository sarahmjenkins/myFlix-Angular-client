import { Component } from '@angular/core';
// import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
// import { LoginFormComponent } from './login-form/login-form.component';
// import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myFlix-Angular-client';


  constructor(public dialog: MatDialog) {}

  openUserProfileDialog(): void {
    this.dialog.open(UserProfileComponent);
  }

  

  // openUserRegistrationDialog(): void {
  //   this.dialog.open(UserRegistrationFormComponent, {width: '280px'});
  // }

  // openLoginDialog(): void {
  //   this.dialog.open(LoginFormComponent, {width: '280px'});
  // }

  // openMoviesDialog(): void {
  //   this.dialog.open(MovieCardComponent, {width: '500px'});
  // }
}
