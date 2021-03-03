import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Validator } from './base64.directive';


@NgModule({
	declarations: [Base64Validator],
	imports: [CommonModule],
	exports: [Base64Validator]
})
export class Base64Module { }
