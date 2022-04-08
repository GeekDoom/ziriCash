import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalsService } from '../services/modals.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {


  constructor(private ms: ModalsService) { }

  ngOnInit(): void {
  }

}