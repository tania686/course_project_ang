import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      '1This is simply a test',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_640.jpg'
    ),
    new Recipe(
      'Second recipe',
      '2This is simply a test',
      'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_640.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
