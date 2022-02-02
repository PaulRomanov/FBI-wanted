import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import { MainPageComponent } from './main-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ModalWindowLoginFormModule } from 'src/app/components/modal-window-login-form/modal-window-login-form.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [

  CommonModule,
    SidebarModule,
    RouterModule,
    ModalWindowLoginFormModule,
    SpinnerModule,
    MatProgressSpinnerModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  providers: [AuthService]
})
export class MainPageModule { }
