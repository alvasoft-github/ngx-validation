import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSONValidator } from './json.directive';


@NgModule({
	declarations: [JSONValidator],
	imports: [CommonModule],
	exports: [JSONValidator]
})
export class JsonModule { }
