import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncludedInValidator } from './included-in.directive';


@NgModule({
	declarations: [IncludedInValidator],
	imports: [CommonModule],
	exports: [IncludedInValidator]
})
export class IncludedInModule { }
