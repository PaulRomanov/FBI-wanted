import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnChangeTitleService } from 'src/app/services/btnChangeTitle.service';

import { ModalWindowService } from 'src/app/services/modal-window.service';


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
    public btnChangeTitleService: BtnChangeTitleService
    ) { }

  public openModal(): void {
    this.isShowModal$.next(true);
    this.changeTitle = false;
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
    this.changeTitle = true;
  }
}
