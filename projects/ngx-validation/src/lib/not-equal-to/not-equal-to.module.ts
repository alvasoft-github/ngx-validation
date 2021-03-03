import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotEqualToValidator } from './not-equal-to.directive';


@NgModule({
	declarations: [NotEqualToValidator],
	imports: [CommonModule],
	exports: [NotEqualToValidator]
})
export class NotEqualToModule { }
