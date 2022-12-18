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

  /**
   * Get list of all movies
   * @function getMovies
   * @returns array of movie objects
  */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any[]) => {
      this.movies = resp;
      // console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Open director info dialog
   * @function openDirectorDialog
   * @param {string} name 
   * @param {string} bio 
   * @param {string} birth 
   * @returns director object
  */
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

  /**
   * Open genre info dialog
   * @function openGenreDialog
   * @param {string} name 
   * @param {string} description 
   * @returns genre object
  */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name.charAt(0).toUpperCase()+name.slice(1),
        description: description,
      }
    })
  }

  /**
   * Open movie summary dialog
   * @function openSynopsisDialog
   * @param {string} name 
   * @param {string} description 
   * @returns movie summary
  */
  openSynopsisDialog(name: string, description: string): void{
    this.dialog.open(SynopsisComponent, {
      data: {
        movie: name,
        description: description
      }
    })
  }

  /**
   * Get user's favorite movies
   * @function getFavorites
   * @returns array of favorite movie objects
  */
  getFavorites(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favorites = resp.favoriteMovies;
      // console.log(this.favorites);
      return this.favorites;
    });
  }

  /**
   * Confirms whether movie is a favorite 
   * @function isFavorite
   * @param {string} id
   * @returns boolean response
  */
  isFavorite(id: string): boolean {
    return this.favorites.includes(id);
  }

  /**
   * Add movie to user favorites
   * @function addFavorite
   * @param {string} id
   * @returns status message
  */
  addFavorite(id: string): void {
    // console.log(id);
    this.fetchApiData.addFavorite(id).subscribe((result) => {
      // console.log(result);
      this.snackBar.open('Movie added to favorites', 'OK', { duration: 2000 });
      this.ngOnInit();
    });
  }

  /**
   * Deletes movie from user favorites
   * @function deleteFavorite
   * @param {string} id
   * @returns status message
  */
  deleteFavorite(id: string): void {
    // console.log(id);
    this.fetchApiData.deleteFavorite(id).subscribe((result) => {
      // console.log(result);
      this.snackBar.open('Movie removed from favorites', 'OK', { duration: 2000 });
      this.ngOnInit();
    })
  }  
}
