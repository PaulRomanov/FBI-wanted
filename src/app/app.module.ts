import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ModalWindowLoginFormModule } from './components/modal-window-login-form/modal-window-login-form.module';
import { HeaderModule } from './components/header/header.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ContentPageModule } from './pages/content-page/content-page.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalWindowLoginFormModule,
    HeaderModule,
    MainPageModule,
    ContentPageModule,
    SidebarModule,
    HttpClientModule,
    SpinnerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
