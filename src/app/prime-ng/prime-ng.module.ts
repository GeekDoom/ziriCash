import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    DialogModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    TabViewModule,
    RippleModule,



  ]
})
export class PrimeNgModule { }
