import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './header/header.component';

const PrimengModules = [
  OverlayPanelModule,
  FileUploadModule,
  SidebarModule,
  MenuModule,
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ...PrimengModules],
  exports: [HeaderComponent],
})
export class UiHeaderModule {}
