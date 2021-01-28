import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

const PrimengModules = [ChartModule];

@NgModule({
  imports: [CommonModule, FeatureDashboardRoutingModule, ...PrimengModules],
  declarations: [DashboardComponent],
})
export class FeatureDashboardModule {}
