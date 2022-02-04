import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SettingsPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPageComponent],
  exports: [SettingsPageComponent]
})
export class SettingsPageModule { }
