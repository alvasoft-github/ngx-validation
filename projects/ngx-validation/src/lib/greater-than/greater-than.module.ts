import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreaterThanValidator } from './greater-than.directive';


@NgModule({
  declarations: [GreaterThanValidator],
  imports: [CommonModule],
  exports: [GreaterThanValidator]
})
export class GreaterThanModule { }
