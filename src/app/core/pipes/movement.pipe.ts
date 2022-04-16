import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { TablesService } from 'src/app/shared/services/tables.service';
import { Movements } from '../../modules/interfaces/tables';

@Pipe({
  name: 'movement'
})
export class MovementPipe implements PipeTransform {

  mov: number = 0;
  movements: Movements[] = []

  constructor(private ts: TablesService) {
    const movements = this.ts.getMovements().subscribe()
  }


  transform(move: number, ...movements: Movements[]): any {
    return
  }

}
