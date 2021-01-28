import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiPrimengModule } from '@nx-angular/ui-primeng';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UiPrimengModule],
  exports: [HeaderComponent],
})
export class UiHeaderModule {}
