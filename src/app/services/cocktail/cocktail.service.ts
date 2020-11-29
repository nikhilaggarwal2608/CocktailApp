import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Cocktail } from 'src/app/models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private httpClient: HttpClient) { }

  getCocktailsByFirstLetter(firstLetter: string): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(this.baseUrl + "search.php?f=" + firstLetter)
      .pipe(catchError(this.handleError));
  }

  getCocktailDetailsById(id): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(this.baseUrl + "lookup.php?i=" + id)
      .pipe(catchError(this.handleError));
  }

  getDrinkCategories(): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(this.baseUrl + "list.php?c=list")
      .pipe(catchError(this.handleError));
  }

  getDrinkIngredients(): Observable<Cocktail> {
    return this.httpClient.get<Cocktail>(this.baseUrl + "list.php?i=list")
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
}
