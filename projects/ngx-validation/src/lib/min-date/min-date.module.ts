import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateValidator } from './min-date.directive';


@NgModule({
	declarations: [MinDateValidator],
	imports: [CommonModule],
	exports: [MinDateValidator]
})
export class MinDateModule { }
