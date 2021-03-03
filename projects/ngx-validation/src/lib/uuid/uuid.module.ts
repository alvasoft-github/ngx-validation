import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UUIDValidator } from './uuid.directive';


@NgModule({
	declarations: [UUIDValidator],
	imports: [CommonModule],
	exports: [UUIDValidator]
})
export class UuidModule { }
