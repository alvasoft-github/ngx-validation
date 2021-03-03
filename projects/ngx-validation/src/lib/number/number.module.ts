import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberValidator } from './number.directive';


@NgModule({
	declarations: [NumberValidator],
	imports: [CommonModule],
	exports: [NumberValidator]
})
export class NumberModule { }
