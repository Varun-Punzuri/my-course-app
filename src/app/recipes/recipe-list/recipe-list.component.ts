import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {

 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe','This is simply a test','https://www.simplyrecipes.com/thmb/_btPJk4Y7vuKOIc1iI3nYpy-yfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'),
    new Recipe('Another test recipe','This is simply a test','https://www.simplyrecipes.com/thmb/_btPJk4Y7vuKOIc1iI3nYpy-yfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'),
    
  ];

  onRecipeSelected(recipe:Recipe){

this.recipeWasSelected.emit(recipe);
  }

}
