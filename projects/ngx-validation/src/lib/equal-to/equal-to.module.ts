import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualToValidator } from './equal-to.directive';


@NgModule({
	declarations: [EqualToValidator],
	imports: [CommonModule],
	exports: [EqualToValidator]
})
export class EqualToModule { }
