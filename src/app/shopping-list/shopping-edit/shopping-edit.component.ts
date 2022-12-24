import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

onAddItem(){
  const Ingname = this.nameInputRef.nativeElement.value;
  const Ingamount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(Ingname, Ingamount);
this.IngredientAdded.emit(newIngredient);

}

}
