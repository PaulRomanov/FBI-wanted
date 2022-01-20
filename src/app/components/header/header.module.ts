import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowLoginFormModule } from '../modal-window-login-form/modal-window-login-form.module';

import { HeaderComponent } from './header.component';



@NgModule({
  imports: [
    CommonModule,
    ModalWindowLoginFormModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
