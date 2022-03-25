import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ModalsComponent } from './modals/modals.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardsComponent,
    FooterComponent,
    MenuComponent,
    ModalsComponent,
    TablesComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CardsComponent,
    FooterComponent,
    MenuComponent,
    ModalsComponent,
    TablesComponent,
    TabsComponent
  ]
})
export class SharedModule { }
