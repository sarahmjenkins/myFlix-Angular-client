import { Component, OnInit, Input} from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() updatedUser: any = { };
  
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditUserComponent>,
    public router: Router
  ) { }

  ngOnInit(): void { }

  editUser(): void {
    this.fetchApiData.editUser(this.updatedUser).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
      this.snackBar.open('User info updated', 'OK', { duration: 2000 });
      localStorage.setItem('user', result.username);
      if (result.username) {
        localStorage.clear();
        this.router.navigate(['welcome']);
        this.snackBar.open('Please log in with your new credentials', 'OK', { duration: 2000 });
      };
    });
  }
}
