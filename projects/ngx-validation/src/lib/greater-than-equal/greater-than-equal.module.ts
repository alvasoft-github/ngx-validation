import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreaterThanEqualValidator } from './greater-than-equal.directive';


@NgModule({
	declarations: [GreaterThanEqualValidator],
	imports: [CommonModule],
	exports: [GreaterThanEqualValidator]
})
export class GreaterThanEqualModule { }
