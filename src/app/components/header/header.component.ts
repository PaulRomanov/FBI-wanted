import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnChangeTitleService } from 'src/app/services/btnChangeTitle.service';

import { ModalWindowService } from 'src/app/services/modal-window.service';
import { ModalWindowLoginFormComponent } from '../modal-window-login-form/modal-window-login-form.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isShowModal$ = this.modalWindowService.isShowModal$;
  public changeTitle = this.btnChangeTitleService.changeTitle;

  constructor(
    public modalWindowService: ModalWindowService,
    public btnChangeTitleService: BtnChangeTitleService,
    public authService: AuthService
  ) { }

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }
}
