import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateValidator } from './date.directive';


@NgModule({
	declarations: [DateValidator],
	imports: [CommonModule],
	exports: [DateValidator]
})
export class DateModule { }
