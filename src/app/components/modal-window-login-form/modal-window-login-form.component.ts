import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { ModalWindowService } from 'src/app/services/modal-window.service';
import { User } from './../../interfaces/interfaces';

@Component({
  selector: 'app-modal-window-login-form',
  templateUrl: './modal-window-login-form.component.html',
  styleUrls: ['./modal-window-login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWindowLoginFormComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  public submited: boolean = false;
  public aSub: Subscription = new Subscription;

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute,
    public modalWindowService: ModalWindowService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  public login(): void {
    this.form.disable()

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role,
    }

    this.aSub = this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      () => {
        this.router.navigate([''])
        this.modalWindowService.isShowModal$.next(false)
      },

      error => {
        console.warn(error)
        this.form.enable()
      }
    )

  }

  public closeModal(): void {
    this.modalWindowService.isShowModal$.next(false)
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
