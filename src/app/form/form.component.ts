import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMessage } from '../shared/component/message/message.component';
import { ValidatorService } from '../shared/services/validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  isSubmit: boolean;
  message: IMessage;

  constructor(private fb: FormBuilder,
              private validator: ValidatorService) { }

  ngOnInit() {
    this.form = this.fb.group({
      text1: ['', this.validator.text1()]
    });
    this.isSubmit = false;
  }

  onFocus() {
    // if (this.form.controls['text1'].valid) {
    //   this.form.controls['text1'].markAsUntouched();
    // }
  }

  onChange() {
    console.log('change');
    this.isSubmit = false;
    if (this.form.controls['text1'].valid) {
      this.form.controls['text1'].markAsUntouched();
    }
  }

  onLostFocus() {
    this.form.controls['text1'].markAsTouched();
  }

  onSubmit() {
    this.isSubmit = false;
    if (this.form.valid) {
      console.log('Form is valid!!');
    } else {
      this.isSubmit = true;
      this.message = {
        title: 'エラータイトル',
        description: 'エラー詳細メッセージ',
        links: [
          {
            title: 'URLのタイトル1',
            url: 'http://google.co.jp/'
          },
          {
            title: 'URLのタイトル2',
            url: 'http://google.co.jp/'
          }
        ]
      };
      Object.keys(this.form.controls).forEach(control => {
        this.form.controls[control].markAsTouched();
      });
      console.log('Form is invalid....');
    }
  }
}
