import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
