import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@nx-angular/data-access-login';
import { StorageLoginService } from '@nx-angular/data-storage-login';
import { LoginResponse } from '@nx-angular/util-interface';
import { takeUntil } from 'rxjs/operators';
import { NgUnsubscribe } from '@nx-angular/util-class';

@Component({
  selector: 'nx-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-180deg)' })),
      transition('rotated => default', animate('800ms ease-out')),
      transition('default => rotated', animate('800ms ease-in')),
    ]),
  ],
})
export class LoginComponent extends NgUnsubscribe implements OnInit {
  public state: string;
  public loading: boolean;

  public userform: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private storageLoginService: StorageLoginService
  ) {
    super();
  }

  ngOnInit(): void {
    this.userform = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.state = 'default';
  }

  public doLogin(e?: Event) {
    if (this.userform.valid) {
      e.preventDefault();
      this.loading = true;

      this.loginService
        .doLogin(this.userform.value)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (loginResponse: LoginResponse) => {
            this.storageLoginService.loginResponse = loginResponse;
            // this.userService.getCurrent();
            this.rotate();
            setTimeout(() => {
              // this.router.navigate([PathTypes.DASHBOARD]);
              this.router.navigate(['dashboard']);
            }, 800);
          },
          (error) => {
            this.loading = false;
          }
        );
    } else {
      Object.keys(this.userform.controls).map((field) =>
        this.userform.get(field).markAsDirty()
      );
    }
  }

  private rotate(): void {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }
}
