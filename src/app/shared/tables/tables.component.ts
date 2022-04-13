import { Component, OnInit } from '@angular/core';
import { Movements } from '../../modules/interfaces/tables';
import { TablesService } from '../services/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [
  ]
})
export class TablesComponent implements OnInit {

  movements: Movements[] = [];

  constructor(
    private ts: TablesService
  ) { }

  ngOnInit(): void {

    this.ts.getMovements()
      .subscribe(mov => {
        console.log(mov)
        this.movements = mov
      })
  }

}
