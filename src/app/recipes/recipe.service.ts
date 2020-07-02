import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { shoppingListService } from '../shoping-list/shoping-list.service';

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[]= [
        new Recipe(
            'test',
            'testttt',
            'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-0/p370x247/16174828_1426717507401787_4791732299311726552_n.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=jLDBko9DU3EAX9exlH9&_nc_ht=scontent.fktw2-1.fna&oh=57af8b78daa54a19c4ff6969a01a66ea&oe=5F1747E6',
            [
                new Ingridient('meat', 1),
                new Ingridient('fries', 20)
            ]
            ),
        new Recipe(
            'tesasdt',
            'tesssstttt',
            'https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-0/p370x247/16174828_1426717507401787_4791732299311726552_n.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=jLDBko9DU3EAX9exlH9&_nc_ht=scontent.fktw2-1.fna&oh=57af8b78daa54a19c4ff6969a01a66ea&oe=5F1747E6',
            [
                new Ingridient('buns', 2),
                new Ingridient('meat', 2)
            ]
            )
      ];

      constructor(private slService: shoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(id: number){
        return this.recipes[id];
    }
    addIngedientToShoppingList(ingriedents: Ingridient[]){
        this.slService.addIngredients(ingriedents);
    }
}