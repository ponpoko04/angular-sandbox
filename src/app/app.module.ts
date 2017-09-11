import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './shared/component/message/message.component';
import { ValidatorService } from './shared/services/validator.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
