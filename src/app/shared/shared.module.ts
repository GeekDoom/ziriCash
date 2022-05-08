import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ModalsComponent } from './modals/modals.component';
import { TabsComponent } from './tabs/tabs.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PortalModule } from '@angular/cdk/portal';
import { Portal1Component } from './modals/portals/portal1/portal1.component';
import { Portal2Component } from './modals/portals/portal2/portal2.component';



@NgModule({
  declarations: [
    CardsComponent,
    FooterComponent,
    MenuComponent,
    ModalsComponent,
    TabsComponent,
    Portal1Component,
    Portal2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    PortalModule,
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
