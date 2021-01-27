import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiPrimengModule } from '@nx-angular/ui-primeng';

@NgModule({
  imports: [CommonModule, FeatureDashboardRoutingModule, UiPrimengModule],
  declarations: [DashboardComponent],
})
export class FeatureDashboardModule {}
