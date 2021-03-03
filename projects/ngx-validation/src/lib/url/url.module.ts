import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlValidator } from './url.directive';


@NgModule({
	declarations: [UrlValidator],
	imports: [CommonModule],
	exports: [UrlValidator]
})
export class UrlModule { }
