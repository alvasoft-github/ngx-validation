import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeLengthValidator } from './range-length.directive';


@NgModule({
	declarations: [RangeLengthValidator],
	imports: [CommonModule],
	exports: [RangeLengthValidator]
})
export class RangeLengthModule { }
