import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-window-login-form',
  templateUrl: './modal-window-login-form.component.html',
  styleUrls: ['./modal-window-login-form.component.scss']
})
export class ModalWindowLoginFormComponent implements OnInit {

  public form!: FormGroup


  @Output() public modal: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.form = new FormGroup({})
  }

  submit(): void {
    console.log('Form submitted: ', this.form)
  }

  cancel(): void {
    this.modal.emit(false);
  }

}
