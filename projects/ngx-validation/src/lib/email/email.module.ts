import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from './email.directive';


@NgModule({
	declarations: [EmailValidator],
	imports: [CommonModule],
	exports: [EmailValidator]
})
export class EmailModule { }
