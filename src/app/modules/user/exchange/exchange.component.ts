import { Component, OnInit } from '@angular/core';
import { TablesService } from 'src/app/shared/services/tables.service';
import { typeOc } from '../../interfaces/selects';
import { Dashboard } from '../../interfaces/tables';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styles: [
  ]
})
export class ExchangeComponent implements OnInit {
  toc?: typeOc[];
  selectedToc?: typeOc;


  dashboard?: Dashboard[]
  first = 0;
  rows = 10;
  constructor(private ts: TablesService) {
    this.toc = [
      { name: 'Transferencia Bancaria', code: 'BTS' },
      { name: 'Paypal', code: 'PAY' },
      { name: 'Zinli', code: 'ZIL' },
      { name: 'Mercado Pago', code: 'MRP' },
      { name: 'Bitcoin', code: 'BTC' },
      { name: 'Ethereum', code: 'ETH' },
    ];
  }

  ngOnInit(): void {

    this.ts.getDash()
      .subscribe(dash => {
        this.dashboard = dash
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
    return this.dashboard ? this.first === (this.dashboard.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.dashboard ? this.first === 0 : true;
  }
}
