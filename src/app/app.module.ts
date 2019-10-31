import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from 'src/custom-material/custom-material.module';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipecreateComponent } from './recipecreate/recipecreate.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEditorComponent } from './form-editor/form-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipesComponentComponent,
    RecipeDetailsComponent,
    RecipecreateComponent,
    FormEditorComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
