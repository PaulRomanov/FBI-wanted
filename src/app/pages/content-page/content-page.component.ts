import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { FbiWantedAPIService } from 'src/app/services/fbiWantedAPI.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPageComponent implements OnInit, OnDestroy {

  public aSub: Subscription = new Subscription;
  public unsubscribe: Subject<void> = new Subject();
  public response: any;
  public isViewMore: boolean = false;



  constructor(

    public fbiWantedAPIService: FbiWantedAPIService,
  ) { }

  ngOnInit(): void {
    this.searchFBIWanted();
  }

  public viewMore(): void {
    this.isViewMore = !this.isViewMore ;
    console.log(this.isViewMore );

    console.log('click');

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
