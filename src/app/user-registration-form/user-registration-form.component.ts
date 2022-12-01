import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // closes the dialog on success
import { FetchApiDataService } from '../fetch-api-data.service'; // imports the API calls
import { MatSnackBar } from '@angular/material/snack-bar'; // displays notifications back to the user

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})

export class UserRegistrationFormComponent implements OnInit {
  // input decorator binds form input values to the user object
  @Input() userData = { username: '', password: '', email: '', birthday: ''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // console.log(result);
      this.dialogRef.close(); // close modal when successfully registered
      this.snackBar.open('User registration successful', 'OK',{ duration: 2000 });
    }, (result) => {
      // console.log(result);
      this.snackBar.open('User registration successful', 'OK', { duration: 2000 });
    });
  }
}
