import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalsService } from 'src/app/shared/services/modals.service';

@Component({
  selector: 'app-portal1',
  templateUrl: './portal1.component.html',
  styles: [
  ]
})
export class Portal1Component implements OnInit {

  portal$!: Observable<ComponentPortal<any>>;

  constructor(
    private ms: ModalsService,
  ) { }

  ngOnInit(): void {
    this.portal$ = this.ms.portal$;
  }

}
