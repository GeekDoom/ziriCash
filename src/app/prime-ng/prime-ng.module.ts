import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DeferModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    PanelModule,
    PasswordModule,
    RippleModule,
    TableModule,
    TabViewModule,




  ]
})
export class PrimeNgModule { }
