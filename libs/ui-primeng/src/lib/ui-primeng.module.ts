import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    TabMenuModule,
    MenuModule,
    SidebarModule,
    DataViewModule,
    PanelModule,
    CheckboxModule,
    DynamicDialogModule,
    DropdownModule,
    ScrollPanelModule,
    TableModule,
    FileUploadModule,
    OverlayPanelModule,
    CarouselModule,
    ToolbarModule,
    FieldsetModule,
    InputMaskModule,
    MessageModule,
    ChartModule,
  ],
  exports: [
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    TabMenuModule,
    MenuModule,
    SidebarModule,
    DataViewModule,
    PanelModule,
    CheckboxModule,
    DynamicDialogModule,
    DropdownModule,
    ScrollPanelModule,
    TableModule,
    FileUploadModule,
    OverlayPanelModule,
    CarouselModule,
    ToolbarModule,
    FieldsetModule,
    InputMaskModule,
    MessageModule,
    ChartModule,
  ],
  providers: [DialogService],
})
export class UiPrimengModule {}
