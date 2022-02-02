import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'content', loadChildren: () => import('./pages/content-page/content-page.module').then(x => x.ContentPageModule), canActivate: [AuthGuard] },
  { path: 'settings', loadChildren: () => import('./pages/settings-page/settings-page.module').then(x => x.SettingsPageModule), canActivate: [AuthGuard] },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
