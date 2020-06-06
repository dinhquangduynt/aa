import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRankComponent } from './movie-rank/movie-rank.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { PostComponent } from './post/post.component';
import { AuthenComponent } from './authen/authen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieRankComponent,
    DetailComponent,
    PostComponent,
    AuthenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
