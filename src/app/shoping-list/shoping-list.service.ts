import { Ingridient } from '../shared/ingridient.model';
import { EventEmitter } from '@angular/core';

export class shoppingListService{

    ingriedentChanged = new EventEmitter<Ingridient[]>();

    private ingridients: Ingridient[] = [
        new Ingridient('apples',5),
        new Ingridient('tomatoes',10)
      ];

    getIngridients(){
        return this.ingridients.slice();
    }
    addIngredient(ingredient: Ingridient){
        this.ingridients.push(ingredient);
        this.ingriedentChanged.emit(this.ingridients.slice());
    }
    addIngredients(ingridients: Ingridient[]){
       // for (let ingredient of ingriedents){
       //     this.addIngredient(ingredient);
        //}
        this.ingridients.push(...ingridients);
        this.ingriedentChanged.emit(this.ingridients.slice());
            
    }
}