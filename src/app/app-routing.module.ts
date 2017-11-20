import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingComponent } from './components/sorting/sorting.component';
import { RecipepuppyComponent } from './components/recipepuppy/recipepuppy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'recipepuppy' },
  { path: 'sorting', component: SortingComponent },
  { path: 'recipepuppy', component: RecipepuppyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SortingComponent, RecipepuppyComponent];