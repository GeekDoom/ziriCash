import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';



@NgModule({
  exports: [
    ButtonModule,
    ImageModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
