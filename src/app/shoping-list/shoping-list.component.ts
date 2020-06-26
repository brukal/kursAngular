import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    new Ingridient('apples',5),
    new Ingridient('tomatoes',10)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngriedentAdded(ingriedent: Ingridient){
    console.log('jestem');
    this.ingridients.push(ingriedent);

  }
}
