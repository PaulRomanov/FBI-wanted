import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalWindowService } from 'src/app/services/modal-window.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
public isShowModal$ = this.modalWindowService.isShowModal$;

  constructor(public modalWindowService: ModalWindowService) { }

  public openModal(): void {
    this.isShowModal$.next(true);
  }

  public closeModal(): void {
    this.isShowModal$.next(false);
  }
}
