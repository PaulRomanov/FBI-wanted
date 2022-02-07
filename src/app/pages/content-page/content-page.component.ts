import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { FbiWantedAPIService } from 'src/app/services/fbi-wanted-API.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'fw-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public aSub: Subscription = new Subscription;
  public unsubscribe: Subject<void> = new Subject();
  public response: any;


  constructor(
    public fbiWantedAPIService: FbiWantedAPIService,
  ) { }

  ngAfterViewInit(): void {

    // this.response.items.length = this.paginator.pageSize

    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.response.items);
      }))
      .subscribe(res => {
        const from = this.paginator.pageIndex * 5;

        const to = from + 20;
        this.response.items = res.slice(from, to);
      });
    console.log('this.response.items', this.response.items);
  }

  ngOnInit(): void {
    this.searchFBIWanted();
    this.response.items = this.paginator
  }

  public OnPageChange(event: PageEvent) {
    console.log(event);

  }

  public searchFBIWanted() {
    this.aSub = this.fbiWantedAPIService.searchFBIWanted()
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}


