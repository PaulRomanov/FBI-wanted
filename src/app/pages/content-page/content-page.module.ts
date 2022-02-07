import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { FbiWantedAPIService } from 'src/app/services/fbi-wanted-API.service';
import { CriminalCardModule } from 'src/app/components/criminal-card/criminal-card.module';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  { path: '', component: ContentPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    HttpClientModule,
    CriminalCardModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatListModule

  ],
  declarations: [ContentPageComponent],
  exports: [ContentPageComponent],
  providers: [FbiWantedAPIService]
})
export class ContentPageModule { }
