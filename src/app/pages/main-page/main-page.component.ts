import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalWindowService } from 'src/app/services/modal-window.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  constructor(public modalWindowService: ModalWindowService) { }

  public openModal(): void {
    this.modalWindowService.isShowModal = true;
  }

  public closeModal(): void {
    this.modalWindowService.isShowModal = false;
  }

}
