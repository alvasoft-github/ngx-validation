import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotMatchingValidator } from './not-matching.directive';


@NgModule({
	declarations: [NotMatchingValidator],
	imports: [CommonModule],
	exports: [NotMatchingValidator]
})
export class NotMatchingModule { }
