import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  fetchData: string ="http://localhost/movie-app/php/index.php"
  constructor(
    private http: HttpClient
  ) { }

  getMovieList(){
    return this.http.get(this.fetchData)
  }

}
