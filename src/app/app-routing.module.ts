import { NgModule } from '@angular/core';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipecreateComponent } from './recipecreate/recipecreate.component';
import { FormEditorComponent } from './form-editor/form-editor.component';



const routes: Routes = [
  {
      path: 'recipes',
      component: RecipesComponentComponent,
      pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent,
    pathMatch: 'full'
},
{
  path: 'createrecipe',
  component: RecipecreateComponent,
  pathMatch: 'full'
},
{
  path: 'createrecipereactive',
  component: FormEditorComponent,
  pathMatch: 'full'
},
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


 }
