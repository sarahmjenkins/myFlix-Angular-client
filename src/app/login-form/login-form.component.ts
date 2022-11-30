import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // closes the dialog on success
import { FetchApiDataService } from '../fetch-api-data.service'; // imports the API calls
import { MatSnackBar } from '@angular/material/snack-bar'; // displays notifications back to the user

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
 // input decorator binds form input values to the user object
  @Input() userData = { username: '', password: ''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      console.log(result);
      localStorage.setItem('user', result.user.username);
      localStorage.setItem('token', result.token);
      this.dialogRef.close(); // close modal when successfully logged in
      this.snackBar.open('User login successful', 'OK',{ duration: 2000 });
    }, (result) => {
      console.log(result);
      this.snackBar.open('User login successful', 'OK', { duration: 2000 });
    });
  }

}
