import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalWindowService } from 'src/app/services/modal-window.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(public modalWindowService: ModalWindowService) { }

  public openModal(): void {
    this.modalWindowService.isShowModal = true;
  }

  public closeModal(): void {
    this.modalWindowService.isShowModal = false;
  }
}
