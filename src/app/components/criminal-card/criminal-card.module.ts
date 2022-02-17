import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriminalCardComponent } from './criminal-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CriminalCardComponent],
  exports: [CriminalCardComponent],
})
export class CriminalCardModule { }
