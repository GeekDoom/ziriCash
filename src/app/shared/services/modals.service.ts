import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


type Portal = ComponentPortal<any>;

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private activePortal = new Subject<Portal>();
  readonly portal$ = this.activePortal.asObservable();

  constructor() { }

  setPortal(portal: Portal) {
    this.activePortal.next(portal);
  }




}
