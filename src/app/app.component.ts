import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from './services/modal-window.service';

@Component({
  selector: 'fw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'FBI-wanted';
  public isStatus: boolean = true;
  public isShowModal$ = this.modalWindowService.isShowModal$;
  public isSpinner: boolean = true;

  constructor(public modalWindowService: ModalWindowService) {


  }

  ngOnInit(): void {
    this.showSpinner()
  }

  public showSpinner(): void {
    setTimeout(() => {
      this.isSpinner = false;
    }, 1000);
  }
}
