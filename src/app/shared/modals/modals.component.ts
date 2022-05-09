import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from '../services/modals.service';
import { CdkPortal, ComponentPortal } from '@angular/cdk/portal';
import { Portal1Component } from './portals/portal1/portal1.component';



@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) portalContent!: CdkPortal;
  componentPortal!: ComponentPortal<Portal1Component>;

  content: any = {};
  display: boolean = false;
  static show: any;
  constructor(
    private ms: ModalsService,
  ) { }


  ngOnInit(): void {
    this.componentPortal = new ComponentPortal(Portal1Component);
    this.ms.setPortal(this.componentPortal!)
  }

  ngOnDestroy(): void {
/*     this.componentPortal!.detach();
 */   }
  show(arg: number) {
    this.componentPortal = new ComponentPortal(Portal1Component);

    switch (arg) {
      case 1:
        this.content = {
          title: 'Trabaja con nosotros',
          msg: this.componentPortal
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


