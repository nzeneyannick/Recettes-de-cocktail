import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent  {
  constructor(private fb: FormBuilder,private recipeService : RecipeService, private router: Router) { }
  recipe = new Recipe();
  

  profileForm = this.fb.group({
    name: [''],
    picture: [''],
    description:[]
    
  });
  creerRecipe(){
    this.recipe.name=this.profileForm.get('name').value;
    this.recipe.picture=this.profileForm.get('picture').value;
    this.recipe.description=this.profileForm.get('description').value;

    this.recipeService.postRecipe(this.recipe).subscribe(
      (res) => console.log(res),
      (error) => console.log(error),
      () => this.router.navigate(['/recipes'])
    );   
    
  }
}





