import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GedComponent } from './ged/ged.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '/ged', component: GedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
