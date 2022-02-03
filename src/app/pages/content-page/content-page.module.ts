import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FbiWantedAPIService } from 'src/app/services/fbiWantedAPI.service';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SidebarModule,
    RouterModule,
    HttpClientModule,

  ],
  declarations: [ContentPageComponent],
  exports: [ContentPageComponent],
  providers: [FbiWantedAPIService]
})
export class ContentPageModule { }
