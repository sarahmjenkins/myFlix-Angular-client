import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void{ }

  /**
   * Opens user profile info
   * @function openUserProfileDialog
   * @returns user object
  */
  openUserProfileDialog(): void {
    this.dialog.open(UserProfileComponent);
  }

  /**
   * Logs user out and clears local storage
   * @function logOut
  */
  logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear()
  }
}
