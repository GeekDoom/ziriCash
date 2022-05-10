import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
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
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DeferModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FormsModule,
    ImageModule,
    InputSwitchModule,
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
