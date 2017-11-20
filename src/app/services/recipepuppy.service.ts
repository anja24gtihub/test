import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Recipes } from '../components/recipepuppy/recipepuppy.model'

@Injectable()
export class RecipepuppyService {
  private baseURL = 'http://www.recipepuppy.com/api/?';
  constructor(private http: HttpClient) { }

  getRecipes(term?: string, ingredients?: string): Observable<Recipes> {

    if (ingredients) {
      ingredients = 'i=' + ingredients;
    } else {
      ingredients = '';
    }
    if (term) {
      let termQueryString: string = 'q=';
      if (ingredients) {
        termQueryString = '&' + termQueryString;
      }
      term = termQueryString + term;
    } else {
      term = '';
    }

    let url = this.baseURL + ingredients + term;
    return this.http.get<Recipes>(url);
  }

}
