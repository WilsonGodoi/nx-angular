import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
export class LoginComponent implements OnInit {
  public state: string;
  public loading: boolean;

  public userform: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

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

      of(true)
        .pipe(delay(1000))
        .subscribe(
          (success) => {
            this.rotate();
            setTimeout(() => {
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
