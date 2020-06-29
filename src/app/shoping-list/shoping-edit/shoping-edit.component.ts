import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { shoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 

  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const newIngriedent = new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngriedent);
  }
}
