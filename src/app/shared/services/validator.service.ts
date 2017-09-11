import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() { }

  text1(): ValidatorFn {
    return (c: AbstractControl) => {
      c.setValidators([Validators.required, Validators.maxLength(10)]);
      return null;
    };
  }
}
