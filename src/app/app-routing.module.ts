import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRankComponent} from './movie-rank/movie-rank.component'
import {AuthenComponent} from './authen/authen.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path : 'rank',component: MovieRankComponent},
   {path : 'Login',component: AuthenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
