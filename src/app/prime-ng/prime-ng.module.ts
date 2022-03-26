import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    ImageModule,
    MenubarModule,


  ]
})
export class PrimeNgModule { }
