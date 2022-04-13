import { Component, OnInit } from '@angular/core';
import { Movements } from '../../interfaces/tables';
import { TablesService } from '../../../shared/services/tables.service';


@Component({
  selector: 'app-wallet-movements',
  templateUrl: './wallet-movements.component.html',
  styles: [
    `:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
        }
        @media screen and (max-width: 64em) {
            :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
                top: 0px;
            }
        }
      `
  ]
})
export class WalletMovementsComponent implements OnInit {
  movements?: Movements[]
  first = 0;

  rows = 10;
  constructor(private ts: TablesService) { }

  ngOnInit(): void {
    this.ts.getMovements()
      .subscribe(mov => {
        this.movements = mov
      })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.movements ? this.first === (this.movements.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.movements ? this.first === 0 : true;
  }

}
