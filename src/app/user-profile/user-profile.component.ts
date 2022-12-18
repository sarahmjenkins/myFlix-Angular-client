import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any = { }
  
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UserProfileComponent>,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Get user info
   * @function getUser
   * @returns user object
  */
  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
      // console.log(this.user);
    });
  }

  /**
   * Open edit user dialog
   * @function openEditUserDialog
   * @returns editUser component
  */
  openEditUserDialog(): void {
   this.dialog.open(EditUserComponent)
  }

  /**
   * Delete user's account
   * @function deleteAccount
   * @returns status message
  */
  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.router.navigate(['welcome']).then(() => {
        this.snackBar.open('Your account has been deleted.', 'OK', {duration: 2000});
        this.dialogRef.close();
      });
      this.fetchApiData.deleteUser().subscribe((result) => {
        // console.log(result);
        localStorage.clear();
      });
    }
  }
}
