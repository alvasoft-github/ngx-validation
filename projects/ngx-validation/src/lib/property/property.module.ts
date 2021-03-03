import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyValidator } from './property.directive';


@NgModule({
	declarations: [PropertyValidator],
	imports: [CommonModule],
	exports: [PropertyValidator]
})
export class PropertyModule { }
