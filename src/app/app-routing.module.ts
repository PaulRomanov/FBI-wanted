import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'content', component: ContentPageComponent },
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
