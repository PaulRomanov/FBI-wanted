import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [SettingsPageComponent],
  exports: [SettingsPageComponent]
})
export class SettingsPageModule { }
