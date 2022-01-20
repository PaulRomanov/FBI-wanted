import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName = '';
  public showModal: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  openModal(): void {
    this.showModal = true;
  }

    // closeModal(newName: string): void {
    //     this.showModal = false;
    //     if (newName) this.name = newName;
    // }

}
