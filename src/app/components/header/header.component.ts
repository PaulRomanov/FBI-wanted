import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public userName = '';
  public isShowModal: boolean = false;

  constructor(public authService: AuthService) { }

  public openModal(): void {
    this.authService.isShowModal = true;
  }

}
