import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TablesService } from 'src/app/shared/services/tables.service';
import { Transactions } from '../../interfaces/tables';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  transactions?: Transactions[]
  first = 0;


  rows = 10;
  constructor(private ts: TablesService) { }

  ngOnInit(): void {
    this.ts.getTransactions()
      .subscribe(tran => {
        this.transactions = tran
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
    return this.transactions ? this.first === (this.transactions.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.transactions ? this.first === 0 : true;
  }

  customSort(event: SortEvent) {
    event.data!.sort((data1, data2) => {
      let value1 = data1[event.field!];
      let value2 = data2[event.field!];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order! * result);
    });
  }

}
