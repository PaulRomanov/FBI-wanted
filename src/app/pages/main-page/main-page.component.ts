import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  constructor(public authService: AuthService) { }

  public openModal(): void {
    this.authService.isShowModal = true;
  }

}
