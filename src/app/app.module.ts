import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';
import { SliderComponent } from './slider/slider.component';
import { EnglishMovieComponent } from './english-movie/english-movie.component';
import { EnglishMovieDetailsComponent } from './english-movie-details/english-movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingMovieComponent,
    SliderComponent,
    EnglishMovieComponent,
    EnglishMovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
