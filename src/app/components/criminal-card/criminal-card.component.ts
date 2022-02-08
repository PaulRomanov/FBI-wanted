import { Component, Input } from '@angular/core';
import { Criminal } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'fw-criminal-card',
  templateUrl: './criminal-card.component.html',
  styleUrls: ['./criminal-card.component.scss']
})
export class CriminalCardComponent {

  @Input()  criminal!: Criminal;

  public isViewMore: boolean = false;

  constructor() {}

  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
  }

}
