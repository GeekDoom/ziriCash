import { Component, OnInit } from '@angular/core';
import { Movements } from '../../interfaces/tables';
import { TablesService } from '../../../shared/services/tables.service';


@Component({
  selector: 'app-wallet-movements',
  templateUrl: './wallet-movements.component.html',
  styles: [
  ]
})
export class WalletMovementsComponent implements OnInit {
  movements: Movements[] = [];

  constructor(private ts: TablesService) { }

  ngOnInit(): void {
    this.ts.getMovements()
      .subscribe(mov => {
        this.movements = mov
      })
  }

}
