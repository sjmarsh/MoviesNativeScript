
import { MovieListComponent }   from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const appRoutes: any = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: MovieListComponent },
    { path: 'detail/:id', component: MovieDetailComponent }
];
 
export const appComponents: any = [
    MovieListComponent,
    MovieDetailComponent
];