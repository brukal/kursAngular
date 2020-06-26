import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter <Recipe>();
  recipes: Recipe[]= [
    new Recipe('test', 'testttt','https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-0/p370x247/16174828_1426717507401787_4791732299311726552_n.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=jLDBko9DU3EAX9exlH9&_nc_ht=scontent.fktw2-1.fna&oh=57af8b78daa54a19c4ff6969a01a66ea&oe=5F1747E6'),
    new Recipe('tesasdt', 'tesssstttt','https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-0/p370x247/16174828_1426717507401787_4791732299311726552_n.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=jLDBko9DU3EAX9exlH9&_nc_ht=scontent.fktw2-1.fna&oh=57af8b78daa54a19c4ff6969a01a66ea&oe=5F1747E6')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
