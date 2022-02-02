import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowLoginFormModule } from '../modal-window-login-form/modal-window-login-form.module';

import { AuthService } from 'src/app/services/auth.service';

import { HeaderComponent } from './header.component';
import { BtnChangeTitleService } from 'src/app/services/btnChangeTitle.service';


@NgModule({
  imports: [
    CommonModule,
    ModalWindowLoginFormModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [AuthService]
})
export class HeaderModule { }
