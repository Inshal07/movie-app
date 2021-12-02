
import { Component } from '@angular/core';
import { MovieListService } from 'src/services/movie-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  constructor(
  ) {
  }

  ngOnInit(): void {

  }

}
