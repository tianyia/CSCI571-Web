import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';
import { MylistPageComponent } from './components/mylist-page/mylist-page.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {
    path:'watch',
    children:[
      {
        path:'movie',
        children:[
          {path:':id', component:MovieDetailPageComponent}
        ]
      },
      {
        path:'tv',
        children:[
          {path:':id', component:TvDetailPageComponent}
        ]
      }
    ]
  },
  {path:'mylist', component:MylistPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
