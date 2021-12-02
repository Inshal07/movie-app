import { Component, OnInit } from '@angular/core';
import { MovieListService } from 'src/services/movie-list.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  movieName:any
  movieList: any
  constructor(
    private movieService: MovieListService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(res => {
      this.movieList = res
      console.log(this.movieList);
    },
      (err) => {
        console.log(err)
        this.movieList = err.error.text;
        console.log(this.movieList)
      }
    )
  }

}
