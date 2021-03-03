import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessThanEqualValidator } from './less-than-equal.directive';


@NgModule({
	declarations: [LessThanEqualValidator],
	imports: [CommonModule],
	exports: [LessThanEqualValidator]
})
export class LessThanEqualModule { }
