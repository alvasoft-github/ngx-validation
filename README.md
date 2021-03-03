# NgxValidation

ngx-validation, which is inspired from [ngx-custom-validators](https://github.com/rsaenen/ngx-custom-validators), enables custom
validation for angular forms, both template or model-driven forms. Since ngx-custom-validators is not maintained anymore, this 
package can be used with the latest version of Angular.

# Installation

```bash
npm i @alvasoft/ngx-validation
```

# Validators

## Angular built-in validators

- maxlength
- minlength
- pattern
- required

## Custom validators

- array length
- base64
- credit card
- date
- date ISO
- digits
- email
- equal
- included in
- not included in
- not equal
- equal to
- not equal to
- greater than
- greater than or equal
- json
- less than
- less than or equal
- max
- max date
- min
- min date
- not equal
- not equal to
- number
- property
- range
- range length
- url
- uuid

# Usage

The paramater of each validator (if it has) can be accessible in the template with `reason`.
```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvGt]="10">
<!-- Will display : error message and must be greater than 10 -->
<p *ngIf="field.errors?.gt">error message and must be greater than {{ field.errors?.reason }}</p>
``` 

## Template driven

import `FormsModule` and `CustomFormsModule` in *app.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CustomFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### range length - rangeLength

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvRangeLength]="[5, 9]">
<p *ngIf="field.errors?.rangeLength">error message</p>
```

### min

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvMin]="10">
<p *ngIf="field.errors?.min">error message</p>
```

### greater than - gt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvGt]="10">
<p *ngIf="field.errors?.gt">error message</p>
```

### greater than or equal - gte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvGte]="10">
<p *ngIf="field.errors?.gte">error message</p>
```

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvMax]="20">
<p *ngIf="field.errors?.max">error message</p>
```

### less than - lt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvLt]="20">
<p *ngIf="field.errors?.lt">error message</p>
```

### less than or equal - lte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvLte]="20">
<p *ngIf="field.errors?.lte">error message</p>
```

### range

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvRange]="[10, 20]">
<p *ngIf="field.errors?.range">error message</p>
```

### digits

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvDigits>
<p *ngIf="field.errors?.digits">error message</p>
```

### number

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvNumber>
<p *ngIf="field.errors?.number">error message</p>
```

### url

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvUrl>
<p *ngIf="field.errors?.url">error message</p>
```

### email

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvEmail>
<p *ngIf="field.errors?.email">error message</p>
```

### date

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvDate>
<p *ngIf="field.errors?.date">error message</p>
```

### min date - minDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvMinDate="2016-09-09">
<p *ngIf="field.errors?.minDate">error message</p>
```

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvMinDate]="myOtherField">
<p *ngIf="field.errors?.minDate">error message</p>
```

### max date - maxDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvMaxDate="2016-09-09">
<p *ngIf="field.errors?.maxDate">error message</p>
```

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvMaxDate]="myOtherField">
<p *ngIf="field.errors?.maxDate">error message</p>
```

### date ISO - dateISO

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvDateISO>
<p *ngIf="field.errors?.dateISO">error message</p>
```

### credit card - creditCard

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvCreditCard>
<p *ngIf="field.errors?.creditCard">error message</p>
```

### json

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvJson>
<p *ngIf="field.errors?.json">error message</p>
```

### base64

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvBase64>
<p *ngIf="field.errors?.base64">error message</p>
```

### uuid

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvUuid]="'all'">
<p *ngIf="field.errors?.uuid">error message</p>
```

*default*: all

**support**

- 3
- 4
- 5
- all

### equal

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvEqual]="'xxx'">
<p *ngIf="field.errors?.equal">error message</p>
```

### not equal - notEqual

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [ngvNotEqual]="'xxx'">
<p *ngIf="field.errors?.notEqual">error message</p>
```

### equal to - equalTo

```html
<input type="password" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [ngvEqualTo]="password">
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

### not equal to - notEqualTo

```html
<input type="text" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [ngvNotEqualTo]="password">
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

### property

```typescript
public obj = { id: 1 } // OK
public obj = { name: 'baguette' } // KO
```

```html
<input type="text" ngModel name="obj" #obj="ngModel" ngvProperty="id">
<!-- For multiple properties check -->
<input type="text" ngModel name="obj" #obj="ngModel" ngvProperty="id,value,name">
<p *ngIf="obj.errors?.property">property error</p>
```

### array length - ArrayLength
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }] // OK
public arr = [{ name: 'baguette' }] // KO
```

```html
<input type="text" ngModel name="arr" #arr="ngModel" ngvArrayLength="2">
<p *ngIf="arr.errors?.arrayLength">arrayLength error</p>
```

## Model driven

import `ReactiveFormsModule` in *app.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

import `validationFunction` in *app.component.ts*

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { range } from '@alvasoft/ngx-validation';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            field: new FormControl('', range([5, 9]))
        });
    }
}
```

```html
<input type="text" formControlName="field">
<p *ngIf="demoForm.from.controls.field.errors?.rangeLength">error message</p>
```

### range length - rangeLenght

```typescript
new FormControl('', rangeLength([5, 9]))
```

### min

```typescript
new FormControl('', min(10))
```

### greater than - gt

```typescript
new FormControl('', gt(10))
```

### max

```typescript
new FormControl('', max(20))
```

### less than - lt

```typescript
new FormControl('', lt(20))
```

### range

```typescript
new FormControl('', range([10, 20]))
```

### digits

```typescript
new FormControl('', digits)
```

### number

```typescript
new FormControl('', number)
```

### url

```typescript
new FormControl('', url)
```

### email

```typescript
new FormControl('', email)
```

### date

```typescript
new FormControl('', date)
```

### min date - minDate

```typescript
new FormControl('', minDate('2016-09-09'))
```

### max date - maxDate

```typescript
new FormControl('', maxDate('2016-09-09'))
```

### date ISO - dateISO

```typescript
new FormControl('', dateISO)
```

### credit card - creditCard

```typescript
new FormControl('', creditCard)
```

### json

```typescript
new FormControl('', json)
```

### base64

```typescript
new FormControl('', base64)
```

### uuid

```typescript
new FormControl('', uuid('3'))
```

### equal

```typescript
new FormControl('', equal('xxx'))
```

### not equal - notEqual

```typescript
new FormControl('', notEqual('xxx'))
```

### equal to - equalTo

```typescript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', equalTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password">
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="form.controls.certainPassword.errors?.equalTo">equalTo error</p>
</form>
```

### not equal to - notEqualTo

```typescript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', notEqualTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password">
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="form.controls.certainPassword.errors?.notEqualTo">notEqualTo error</p>
</form>
```

### property
```typescript
public obj = { id: 1 };

this.form = new FormGroup({
  obj: new FormControl('', property('id'))
  // For multiple properties check
  obj: new FormControl('', property('id,value,name'))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="obj">
  <p *ngIf="form.controls.obj.errors?.property">property error</p>
</form>
```

### array length - ArrayLength
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }]
this.form = new FormGroup({
  arr: new FormControl('', arrayLength(2))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="arr">
  <p *ngIf="arr.errors?.arrayLength">arrayLength error</p>
</form>
```

### included in array - includedIn
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }]
this.form = new FormGroup({
  arr: new FormControl('bread', includedIn(arr))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="arr">
  <p *ngIf="arr.errors?.includedIn">includedIn error</p>
</form>
```

### not included in array - notIncludedIn
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }]
this.form = new FormGroup({
  arr: new FormControl('baguette', notIncludedIn(arr))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="arr">
  <p *ngIf="arr.errors?.notIncludedIn">notIncludedIn error</p>
</form>
```

### not matching a regular expression - notMatching (negate pattern)
```typescript
public pattern = /a+bc/
this.form = new FormGroup({
  p: new FormControl('aabc', notIncludedIn(pattern))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="p">
  <p *ngIf="arr.errors?.notMatching">notMatching error</p>
</form>
```
