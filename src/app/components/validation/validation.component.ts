import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  imports: [
    NgStyle,
    JsonPipe
  ],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  @Input() control:AbstractControl|null = null;
  @Input() example='';
  @Input() custom:Boolean=false;
  @Input() message='';
  isValid(){
    return this.control?.valid
  }
  touched () {
    return !this.control?.pristine
  }
  getError(key:string){
    return this.control?.errors?.[key] ?? false
  }
  getVal(key:string, val:string){
    return this.getError(key)?.[val]
  }
  current(){
    return this.getVal('minlength','actualLength')
  }
  required(){
    return this.getVal('minlength','requiredLength')
  }
}
