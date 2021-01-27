import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiPrimengModule } from '@nx-angular/ui-primeng';

@NgModule({
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    ReactiveFormsModule,
    UiPrimengModule,
  ],
  declarations: [LoginComponent],
})
export class FeatureLoginModule {}
