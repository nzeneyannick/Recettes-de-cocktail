import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MOCK } from '../mock';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() delete: EventEmitter<Recipe> = new EventEmitter()

  status = true;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { 

  }


  ngOnInit() {
  }

  toggle() {
    this.status = !this.status;

  }
  deleteRecette(){
    this.recipeService.deleteRecipeById(this.recipe.id.toString())
    .subscribe(() => this.delete.emit(this.recipe));

  }
  

}
