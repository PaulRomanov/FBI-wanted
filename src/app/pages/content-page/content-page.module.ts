import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ContentPageComponent}
]
@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContentPageComponent],
  exports: [ContentPageComponent]
})
export class ContentPageModule { }
