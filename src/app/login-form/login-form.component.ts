import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // closes the dialog on success
import { FetchApiDataService } from '../fetch-api-data.service'; // imports the API calls
import { MatSnackBar } from '@angular/material/snack-bar'; // displays notifications back to the user
import { Router } from '@angular/router';

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
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * User login
   * @function loginUser
   * @returns status message
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      // console.log(result);
      localStorage.setItem('user', result.user.username);
      localStorage.setItem('token', result.token);
      this.dialogRef.close(); // close modal when successfully logged in
      this.snackBar.open('User login successful', 'OK',{ duration: 2000 });
      this.router.navigate(['movies']);
    }, (result) => {
      // console.log(result);
      this.snackBar.open('User login successful', 'OK', { duration: 2000 });
    });
  }

}
