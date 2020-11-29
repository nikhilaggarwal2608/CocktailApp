import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListCocktailComponent
  },
  {
    path: 'cocktails/:id', 
    component: CocktailDetailComponent
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
