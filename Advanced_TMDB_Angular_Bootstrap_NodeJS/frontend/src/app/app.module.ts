import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TypeheadComponent } from './components/typehead/typehead.component';
import { TopCarouselComponent } from './components/top-carousel/top-carousel.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CastPopUpComponent } from './components/cast-pop-up/cast-pop-up.component';
import { MylistPageComponent } from './components/mylist-page/mylist-page.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailPageComponent,
    TvDetailPageComponent,
    CarouselComponent,
    NavBarComponent,
    TypeheadComponent,
    TopCarouselComponent,
    CastPopUpComponent,
    MylistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ CastPopUpComponent]
})
export class AppModule { }
