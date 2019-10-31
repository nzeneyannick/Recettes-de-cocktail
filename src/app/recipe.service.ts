import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { Recipe } from './recipe.model';
import { MOCK } from './mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }
  getRecipes():Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>('http://localhost:8080/api/v1/recipes');
  }
  getRecipeById(id:string):Observable<Recipe>{
    return this.httpClient.get<Recipe>('http://localhost:8080/api/v1/recipes/'+id);
  }
postRecipe(recipe):Observable<Recipe>{
  return this.httpClient.post<Recipe>('http://localhost:8080/api/v1/recipes', recipe);
}
deleteRecipeById(id:string):Observable<Recipe>{
  return this.httpClient.delete<Recipe>('http://localhost:8080/api/v1/recipes/'+id);
}

}
