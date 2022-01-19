import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageModule { }
