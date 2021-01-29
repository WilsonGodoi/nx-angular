import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { LoginComponent } from './login/login.component';

const PrimengModules = [
  CardModule,
  ButtonModule,
  InputTextModule,
  MessageModule,
  ProgressSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    ReactiveFormsModule,
    ...PrimengModules,
  ],
  declarations: [LoginComponent],
})
export class FeatureLoginModule {}
