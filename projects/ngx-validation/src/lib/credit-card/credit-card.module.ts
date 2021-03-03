import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardValidator } from './credit-card.directive';


@NgModule({
  declarations: [CreditCardValidator],
  imports: [CommonModule],
  exports: [CreditCardValidator]
})
export class CreditCardModule { }
