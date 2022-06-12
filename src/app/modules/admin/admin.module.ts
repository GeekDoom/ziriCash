import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { MovementsComponent } from './movements/movements.component';
import { PublicationsComponent } from './publications/publications.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    UsersComponent,
    MovementsComponent,
    PublicationsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class AdminModule { }
