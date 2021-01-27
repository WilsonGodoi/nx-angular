import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FeatureLoginRoutingModule } from './feature-login-routing.module';

@NgModule({
  imports: [CommonModule, FeatureLoginRoutingModule],
  declarations: [LoginComponent]
})
export class FeatureLoginModule {}
