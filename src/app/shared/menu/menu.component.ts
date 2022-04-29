import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonLabel } from 'src/app/core/interfaces/buttonLabel';
import { ModalsComponent } from '../modals/modals.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  @ViewChild('modals') modals: ModalsComponent | undefined;

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
            styleClass: 'md:mr-3'

          },
          {
            label: 'Admin',
            icon: 'pi pi-fw pi-user',
            routerLink: '/admin',

          }

        ];
        this.buttonsLabel = [
          {
            label: 'Login',
            route: '/auth',
            icon: 'pi pi-fw pi-sign-in'
          }

        ]
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
            styleClass: 'md:mr-3'

          },
          {
            label: 'Reports',
            icon: 'pi pi-fw pi-ticket',
            routerLink: '/admin/reports',
            styleClass: 'md:mr-3'
          },
          {
            label: 'Publications',
            icon: 'pi pi-fw pi-book',
            routerLink: '/admin/publications',
            styleClass: 'md:mr-3'
          },
          {
            label: 'Transactions',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: '/admin/transactions',
            styleClass: 'md:mr-3'
          }

        ];
        break;

      case '/user/wallet':
      case '/user/exchange':
      case '/user/generate':
        this.items = [
          {
            label: 'Wallet',
            icon: 'pi pi-fw pi-wallet',
            routerLink: '/user/wallet',
            styleClass: 'md:mr-3'

          },
          {
            label: 'Exchange',
            icon: 'pi pi-fw pi-sort-alt',
            routerLink: '/user/exchange',
            styleClass: 'md:mr-3'
          },
          {
            label: 'Generate',
            icon: 'pi pi-percentage',
            routerLink: '/user/generate',
            styleClass: 'md:mr-3'
          },
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            styleClass: 'md:mr-3',
            command: () => {
              (this.modals?.show(1))
            }
          }
        ];
        break;
      case '/auth/login':
      case '/auth/register':
        this.items = [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: '/auth/login',
            styleClass: 'md:mr-3'

          },
          {
            label: 'Register',
            icon: 'pi pi-fw pi-sign-out',
            routerLink: '/auth/register',
          }

        ];
        this.buttonsLabel = [
          {
            label: 'Login',
            route: '/index',
            icon: 'pi pi-fw pi-sign-in'
          }

        ]
        break;

    }
    if (this.router.url === '/index') {
      return
    } else if (this.router.url !== '/auth/login' && this.router.url !== '/auth/register') {
      this.buttonsLabel = [
        {
          label: 'Logout',
          route: '/index',
          icon: 'pi pi-fw pi-sign-out'
        }

      ]
    }

  }
}
