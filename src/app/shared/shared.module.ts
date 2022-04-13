import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ModalsComponent } from './modals/modals.component';
import { TabsComponent } from './tabs/tabs.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardsComponent,
    FooterComponent,
    MenuComponent,
    ModalsComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [
    CardsComponent,
    FooterComponent,
    MenuComponent,
    ModalsComponent,
    TabsComponent
  ]
})
export class SharedModule { }
