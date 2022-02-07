import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalWindowService } from 'src/app/services/modal-window.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'fw-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  constructor(
    public modalWindowService: ModalWindowService,
    public authService: AuthService,
    public appComponent: AppComponent
  ) { }

  public login(): void {
    this.modalWindowService.openModal();
  }

  public logout(): void {
    this.modalWindowService.closeModal();
    this.authService.userName = '';
    this.appComponent.isStatus = !this.appComponent.isStatus
  }

}
