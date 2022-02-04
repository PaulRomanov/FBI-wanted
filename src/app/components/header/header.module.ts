import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowLoginFormModule } from '../modal-window-login-form/modal-window-login-form.module';

import { AuthService } from 'src/app/services/auth.service';
import { HeaderComponent } from './header.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ModalWindowLoginFormModule,
    SpinnerModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [AuthService]
})
export class HeaderModule { }
