import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [ContentPageComponent],
  exports: [ContentPageComponent]
})
export class ContentPageModule { }
