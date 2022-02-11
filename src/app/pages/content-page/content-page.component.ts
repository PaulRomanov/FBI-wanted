import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FbiWantedAPIService } from 'src/app/services/fbi-wanted-API.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Criminal } from 'src/app/interfaces/interfaces';
import { loadCriminal } from 'src/store/criminals/criminals.action';
import { selectCriminal } from 'src/store/criminals/criminals.selectors';
import { CriminalFacade } from 'src/store/criminals/criminals.facade';
import { loadCriminalSuccess } from './../../../store/criminals/criminals.action';
import { CriminalState } from 'src/store/criminals/criminals.state';


@Component({
  selector: 'fw-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent implements OnInit {

  public response: any;
  public criminals$!: Observable<Criminal[]>;
  public total!: number;
  public page: number = 0;

  constructor(
    // public fbiWantedAPIService: FbiWantedAPIService,
    private criminasFacade: CriminalFacade,
    private store: Store<CriminalState>
  ) { }


  ngOnInit(): void {
    // this.searchFBIWanted();
    this.criminasFacade.loadCrim()


    this.store.select(data => data.criminals).subscribe((res) => {


      // console.log(this.store.select(selectCriminal));

    }
    )
  }

  public OnPageChange(event: PageEvent) {
    this.page = event.pageIndex
    // this.searchFBIWanted();
  }

  // public searchFBIWanted() {
  //   this.criminals$ = this.fbiWantedAPIService.searchFBIWanted(this.page + 1).pipe(
  //     map((criminalsRespons) => {
  //       this.total = criminalsRespons.total;

  //       return criminalsRespons.items;
  //     })
  //   )
  // }

}


