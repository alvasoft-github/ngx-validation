import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotEqualValidator } from './not-equal.directive';


@NgModule({
	declarations: [NotEqualValidator],
	imports: [CommonModule],
	exports: [NotEqualValidator]
})
export class NotEqualModule { }
