import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayLengthValidator } from './array-length.directive';


@NgModule({
	declarations: [ArrayLengthValidator],
	imports: [CommonModule],
	exports: [ArrayLengthValidator]
})
export class ArrayLengthModule { }
