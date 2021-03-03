import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateISOValidator } from './date-iso.directive';


@NgModule({
	declarations: [DateISOValidator],
	imports: [CommonModule],
	exports: [DateISOValidator]
})
export class DateIsoModule { }
