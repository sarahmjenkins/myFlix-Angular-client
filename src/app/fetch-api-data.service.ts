import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

// declare the api url that will provide data for the app
const apiUrl = 'https://myflixbysarah.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  // inject HttpClient module to the constructor params
  // this will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}
  
  /**
   * User registration
   * @function userRegistration
   * @param {any} userDetails 
   * @returns new user object
  */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'register', userDetails)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * User login
   * @function userLogin
   * @param {any} userDetails 
   * @returns user object
  */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Get all movies
   * @function getAllMovies
   * @returns array of all movie objects
  */
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        }),
      })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Get one movie
   * @function getOneMovie
   * @param {string} Title 
   * @returns movie object
  */
  getOneMovie(Title: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get('apiUrl + `movies/${Title}`', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Get director
   * @function getDirector
   * @param {string} Director 
   * @returns director object
  */
  getDirector(Director: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies/directors/${Director}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Get genre
   * @function getGenre
   * @param {string} Genre 
   * @returns genre object
  */
  getGenre(Genre: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies/genres/${Genre}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Get one user
   * @function getUser
   * @param {string} username
   * @returns user object
  */
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user')
    return this.http.get(apiUrl + `users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Get favorite movies
   * @function getFavorites
   * @param {string} username
   * @param {string} MovieId
   * @returns array of favorite movies
  */
  // function needs to be revised
  // getFavorites(MovieId: string): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const username = localStorage.getItem('user')
  //   return this.http.get(apiUrl + `users/${username}/movies/${MovieId}`, {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + token
  //     }),
  //   }).pipe(
  //     map(this.extractResponseData),
  //     catchError(this.handleError)
  //   );
  // }

  /**
   * Add movie to list of favorites
   * @function addFavorite
   * @param {string} username
   * @param {string} MovieId
   * @returns user object
  */
  addFavorite(MovieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/movies/${MovieId}`, MovieId, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Delete movie from list of favorites
   * @function deleteFavorite
   * @param {string} username
   * @param {string} MovieId
   * @returns user object
  */
  deleteFavorite(MovieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}/movies/${MovieId}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * Edit user
   * @function editUser
   * @param {any} userDetails
   * @returns user object
  */
  editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');    
    return this.http
      .put(apiUrl + `users/${username}`, userDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        }),
      })
      .pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Delete user
   * @function deleteUser
   * @param {string} username
   * @returns stauts message
  */
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user'); 
    return this.http
      .delete(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        }),
      }).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  /**
   * Response data
   * @param res 
   * @returns response message
  */
  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

  /**
   * Error handler
   * @param error 
   * @returns error message 
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` +
        `Error body is: ${error.error}` 
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
