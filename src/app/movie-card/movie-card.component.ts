import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  movies: any[] = [];
  favorites: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getFavorites()
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any[]) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name: name,
        bio: bio,
        birth: birth,
      }, 
      width: '500px',
    })
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name.charAt(0).toUpperCase()+name.slice(1),
        description: description,
      }
    })
  }

  openSynopsisDialog(name: string, description: string): void{
    this.dialog.open(SynopsisComponent, {
      data: {
        movie: name,
        description: description
      }
    })
  }

  getFavorites(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favorites = resp.favoriteMovies;
      console.log(this.favorites);
      return this.favorites;
    });
  }

  isFavorite(id: string): boolean {
    return this.favorites.includes(id);
  }

  addFavorite(id: string): void {
    console.log(id);
    this.fetchApiData.addFavorite(id).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Movie added to favorites', 'OK', { duration: 2000 });
      this.ngOnInit();
    });
  }

  deleteFavorite(id: string): void {
    console.log(id);
    this.fetchApiData.deleteFavorite(id).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Movie removed from favorites', 'OK', { duration: 2000 });
      this.ngOnInit();
    })
  }  


}
