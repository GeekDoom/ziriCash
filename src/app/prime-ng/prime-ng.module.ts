import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  exports: [
    ButtonModule,
    ImageModule,
    MenubarModule,
    RippleModule
    
  ]
})
export class PrimeNgModule { }
