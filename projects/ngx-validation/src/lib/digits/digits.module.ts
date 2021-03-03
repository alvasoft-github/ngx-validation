import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsValidator } from './digits.directive';


@NgModule({
	declarations: [DigitsValidator],
	imports: [CommonModule],
	exports: [DigitsValidator]
})
export class DigitsModule { }
