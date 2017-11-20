import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Recipes } from './recipepuppy.model'
import { RecipepuppyService } from '../../services/recipepuppy.service';

@Component({
  selector: 'app-recipepuppy',
  templateUrl: './recipepuppy.component.html',
  styleUrls: ['./recipepuppy.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RecipepuppyComponent implements OnInit {

  public recipes: Recipes = new Recipes();
  public term: string = '';
  public ingredients: string = '';

  constructor(private recipepuppyService: RecipepuppyService) { }

  ngOnInit() {
  }

  getRecipes(term: string, ingredients: string) {

    if (term) {
      this.term = term;
    } else {
      term = this.term;
    }
    if (ingredients) {
      this.ingredients = ingredients;
    } else {
      ingredients = this.ingredients;
    }

    this.recipepuppyService.getRecipes(term, ingredients)
      .subscribe((res: Recipes) => {
        this.recipes = res;
      });
  }

}
