import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { shoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],

})
export class ShopingListComponent implements OnInit {

  ingridients: Ingridient[] = [];

  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients();
    this.slService.ingriedentChanged
    .subscribe(
      (ingridients: Ingridient[]) =>{
        this.ingridients = ingridients;
      }
    );
  }

}
