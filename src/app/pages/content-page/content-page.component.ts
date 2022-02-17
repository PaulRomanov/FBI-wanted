import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { Criminal } from 'src/app/interfaces/interfaces';
import { CriminalFacade } from 'src/store/criminals/criminals.facade';

@Component({
  selector: 'fw-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent implements OnInit {

  public response: any;
  public criminals$!: Observable<Criminal[]>;
  public total: number = 949;
  public page: number = 1;


  constructor(
    private criminalsFacade: CriminalFacade,
  ) { }


  ngOnInit(): void {
    this.criminals$ = this.criminalsFacade.criminals$
    this.criminalsFacade.loadCrim(this.page);
  }

  public OnPageChange(event: PageEvent) {
    this.page = event.pageIndex +1
    this.criminalsFacade.loadCrim(this.page);
  }

}
