import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxValidator } from './max.directive';


@NgModule({
	declarations: [MaxValidator],
	imports: [CommonModule],
	exports: [MaxValidator]
})
export class MaxModule { }
