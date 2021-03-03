import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeValidator } from './range.directive';


@NgModule({
	declarations: [RangeValidator],
	imports: [CommonModule],
	exports: [RangeValidator]
})
export class RangeModule { }
