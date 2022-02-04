import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-criminal-card',
  templateUrl: './criminal-card.component.html',
  styleUrls: ['./criminal-card.component.scss']
})
export class CriminalCardComponent {

  @Input() item: any;

  public isViewMore: boolean = false;

  constructor() {}

  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
    console.log(this.isViewMore);
  }

}
