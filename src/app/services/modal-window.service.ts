import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalWindowService {

  public isShowModal: boolean = false;

  constructor() { }

  public openModal(val: boolean) {
    return !val;
  }

  public closeModal(val: boolean) {
    return !val;
  }

}
