import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipecreate',
  templateUrl: './recipecreate.component.html',
  styleUrls: ['./recipecreate.component.scss']
})
export class RecipecreateComponent implements OnInit {

  recipe = new Recipe();
  constructor(private recipeService : RecipeService, private router: Router) { }

  ngOnInit(): void{  
      
  }
postRecipe(){
  this.recipeService.postRecipe(this.recipe).subscribe(
    (res) => console.log(res),
    (error) => console.log(error),
    () => this.router.navigate(['/recipes'])
  );   

}
}
