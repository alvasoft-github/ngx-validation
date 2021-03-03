import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxDateValidator } from './max-date.directive';


@NgModule({
	declarations: [MaxDateValidator],
	imports: [CommonModule],
	exports: [MaxDateValidator]
})
export class MaxDateModule { }
