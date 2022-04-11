import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    DeferModule,
    DialogModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    PasswordModule,
    RippleModule,
    TableModule,
    TabViewModule,




  ]
})
export class PrimeNgModule { }
