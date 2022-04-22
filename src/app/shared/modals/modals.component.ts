import { Component, OnInit, Renderer2, } from '@angular/core';
import { ModalsService } from '../services/modals.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  content: any = {};
  display: boolean = false;
  constructor(
    private ms: ModalsService,
    private r2: Renderer2,
  ) { }

  ngOnInit(): void {

  }
  show(arg: number) {
    switch (arg) {
      case 1:
        this.content = {
          title: 'Elige el plan ideal para ti.',

          msg: 'Prueba 1'

        };
        this.display = true
        break;
      case 2:
        this.content = {
          title: 'Trabaja con nosotros',
          msg: 'Esto es una prueba 2'
        };
        this.display = true
        break;
      case 3:
        this.content = {
          title: 'FAQ',
          msg: 'Esto es una prueba 3'
        };
        this.display = true
        break;
      case 4:
        this.content = {
          title: '',
          msg: 'Esto es una prueba 4'
        };
        this.display = true
        break;
    }
  }



}


