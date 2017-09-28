import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'peliculas', component: PeliculasComponent
  },   
  {
    path: 'series', component: SeriesComponent
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
