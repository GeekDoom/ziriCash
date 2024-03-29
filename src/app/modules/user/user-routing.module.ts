import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';
import { GenerateComponent } from './generate/generate.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletMovementsComponent } from './wallet-movements/wallet-movements.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'wallet', component: WalletComponent },
      { path: 'generate', component: GenerateComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'movements', component: WalletMovementsComponent },
      { path: '**', redirectTo: 'wallet' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
