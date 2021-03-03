import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotIncludedInValidator } from './not-included-in.directive';


@NgModule({
	declarations: [NotIncludedInValidator],
	imports: [CommonModule],
	exports: [NotIncludedInValidator]
})
export class NotIncludedInModule { }
