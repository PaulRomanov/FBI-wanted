import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalWindowService } from 'src/app/services/modal-window.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'fw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    public modalWindowService: ModalWindowService,
    public authService: AuthService,
    public appComponent: AppComponent,
    private router: Router
  ) { }

  public login(): void {
    this.modalWindowService.openModal();
  }


  public logout(): void {
    this.modalWindowService.closeModal();
    this.authService.userName = '';
    this.appComponent.isStatus = !this.appComponent.isStatus
    localStorage.clear();
    this.router.navigate([''])
  }
}
