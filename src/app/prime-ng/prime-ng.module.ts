import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  exports: [
    ButtonModule,
    DialogModule,
    ImageModule,
    MenubarModule,
    RippleModule,


  ]
})
export class PrimeNgModule { }
