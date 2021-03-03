import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessThanValidator } from './less-than.directive';


@NgModule({
  declarations: [LessThanValidator],
  imports: [CommonModule],
  exports: [LessThanValidator]
})
export class LessThanModule { }
