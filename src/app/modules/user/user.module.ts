import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { GenerateComponent } from './generate/generate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalletMovementsComponent } from './wallet-movements/wallet-movements.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WalletComponent,
    ExchangeComponent,
    GenerateComponent,
    WalletMovementsComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class UserModule { }
