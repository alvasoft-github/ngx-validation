import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinValidator } from './min.directive';


@NgModule({
	declarations: [MinValidator],
	imports: [CommonModule],
	exports: [MinValidator]
})
export class MinModule { }
