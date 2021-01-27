import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, FeatureDashboardRoutingModule],
  declarations: [DashboardComponent],
})
export class FeatureDashboardModule {}
