import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styles: [
  ]
})
export class WalletComponent implements OnInit {
  saldo = 55

  walletForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    amount: [, Validators.required],
    name: [{value:'', disabled: true},],
  })


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

}
