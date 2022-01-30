import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BtnChangeTitleService {

  public changeTitle: boolean = true;

  constructor() { }

  public openModal(): void {
    this.changeTitle = false;
  }

  public closeModal(): void {
    this.changeTitle = true;
  }

}
