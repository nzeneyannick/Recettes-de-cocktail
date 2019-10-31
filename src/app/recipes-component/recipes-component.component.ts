import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.scss']
})
export class RecipesComponentComponent implements OnInit {

  recipes:Recipe[];
  
  constructor(private recipeService: RecipeService) {

  }
  

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(result => this.recipes = result);
  }

  jeVeuxSupprimerdelaliste(event) {
    this.recipes.splice(this.recipes.indexOf(event), 1);
  }
}
