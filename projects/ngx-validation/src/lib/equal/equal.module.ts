import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualValidator } from './equal.directive';


@NgModule({
  declarations: [EqualValidator],
  imports: [CommonModule],
  exports: [EqualValidator]
})
export class EqualModule { }
