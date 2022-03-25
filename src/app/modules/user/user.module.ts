import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { GenerateComponent } from './generate/generate.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WalletComponent,
    ExchangeComponent,
    GenerateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
