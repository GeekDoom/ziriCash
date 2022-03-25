import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonLabel } from 'src/app/core/interfaces/buttonLabel';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {


  items: MenuItem[] = [];
  buttonsLabel: ButtonLabel[] = []

  url = this.router.url

  constructor(
    private ar: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    switch (this.url) {
      case '/index':
        this.items = [
          {
            label: 'User',
            icon: 'pi pi-fw pi-users',
            routerLink: '/user',

          },
          {
            label: 'Admin',
            icon: 'pi pi-fw pi-user',
            routerLink: '/admin',
          }

        ];
        break;
      case '/admin/users':
      case '/admin/reports':
      case '/admin/publications':
      case '/admin/transactions':
        this.items = [
          {
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            routerLink: '/admin/users',

          },
          {
            label: 'Reports',
            icon: 'pi pi-fw pi-user',
            routerLink: '/admin/reports',
          },
          {
            label: 'Publications',
            icon: 'pi pi-fw pi-user',
            routerLink: '/admin/publications',
          },
          {
            label: 'Transactions',
            icon: 'pi pi-fw pi-user',
            routerLink: '/admin/transactions',
          }

        ];
        break;

      case '/user/wallet':
      case '/user/exchange':
      case '/user/generate':
        this.items = [
          {
            label: 'Wallet',
            icon: 'pi pi-fw pi-users',
            routerLink: '/user/wallet',

          },
          {
            label: 'Exchange',
            icon: 'pi pi-fw pi-user',
            routerLink: '/user/exchange',
          },
          {
            label: 'Generate',
            icon: 'pi pi-fw pi-user',
            routerLink: '/user/generate',
          }

        ];
        break;
      case '/auth/login':
      case '/auth/register':
        this.items = [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-users',
            routerLink: '/user/wallet',

          },
          {
            label: 'Register',
            icon: 'pi pi-fw pi-user',
            routerLink: '/user/exhange',
          }

        ];
        break;
    }
    if (this.router.url === '/index') {
      this.buttonsLabel = [
        {
          label: 'Login',
          route: '/auth',
          icon: 'pi pi-lock-open'
        }

      ]
    } else {
      this.buttonsLabel = [
        {
          label: 'Logout',
          route: '/index',
          icon: 'pi pi-power-off'
        }
      ]
    }

  }

}
