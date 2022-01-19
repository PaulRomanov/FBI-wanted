import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowLoginFormModule } from './components/modal-window-login-form/modal-window-login-form/modal-window-login-form.module';
import { HeaderModule } from './components/header/header.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
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
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
