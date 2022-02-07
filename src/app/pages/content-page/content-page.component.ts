import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FbiWantedAPIService } from 'src/app/services/fbi-wanted-API.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

import { Criminal } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'fw-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public response: any;
  public criminals$!: Observable<Criminal[]>;
  public total!: number;
  public page: number = 0;

  constructor(
    public fbiWantedAPIService: FbiWantedAPIService,
  ) { }


  ngOnInit(): void {
    this.searchFBIWanted();
  }

  public OnPageChange(event: PageEvent) {
    this.page = event.pageIndex
    this.searchFBIWanted();
  }

  public searchFBIWanted() {
    this.criminals$ = this.fbiWantedAPIService.searchFBIWanted(this.page + 1).pipe(
      map((criminalsRespons) => {
        this.total = criminalsRespons.total;

        return criminalsRespons.items;
      })
    )
  }

}


