import { Component } from '@angular/core';
import { ModalWindowService } from './services/modal-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FBI-wanted';
  public status: boolean = true;
  public isShowModal$ = this.modalWindowService.isShowModal$;

  constructor(public modalWindowService: ModalWindowService){}
}
