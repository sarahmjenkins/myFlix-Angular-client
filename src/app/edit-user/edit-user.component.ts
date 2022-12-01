import { Component, OnInit, Input} from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() userData = { username: '', password: '', email: '', birthday: ''}
  
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditUserComponent>,
  ) { }

  ngOnInit(): void { }

  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
      this.snackBar.open('User info updated', 'OK', { duration: 2000 });
    }, (result) => {
      console.log(result);
      this.snackBar.open('User info updated', 'OK', { duration: 2000 });
    });
  }

}
