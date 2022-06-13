import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit, OnDestroy {

  content: any = {};
  display: boolean = false;
  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  display5: boolean = false;
  static show: any;
  constructor(
  ) { }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
/*     this.componentPortal!.detach();
 */   }
  show(arg: number) {

    switch (arg) {
      case 1: //TODO: Conocer Más

        this.display = true
        break;
      case 2://TODO: Programa de inversión

        this.display1 = true
        break;
      case 3://TODO: Trabaja con nosotros

        this.display2 = true
        break;
      case 4://TODO: FAQ

        this.display3 = true
        break;
      case 5://TODO: Perfil

        this.display4 = true
        break;
      case 5://TODO: Agregar

        this.display5 = true
        break;
    }
  }



}


