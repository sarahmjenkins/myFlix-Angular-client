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

  openUserProfileDialog(): void {
    this.dialog.open(UserProfileComponent);
  }

  logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear()
  }
}
