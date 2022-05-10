import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonLabel } from 'src/app/core/interfaces/buttonLabel';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ModalsComponent } from '../modals/modals.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  @ViewChild('modals') modals: ModalsComponent | undefined;
  item: MenuItem[] = [];
  buttonsLabel: ButtonLabel[] = [];
  theme: string = "md-light-deeppurple";
  url = this.router.url;
  checked!: boolean;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    if (localStorage.getItem('Theme') === 'md-dark-deeppurple.css') {
      this.checked = true
    }
  }

  ngOnInit() {
    switch (this.url) {
      case '/index':
        this.item = [
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
            styleClass: 'md:mr-3'
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: '/auth',
            styleClass: 'md:mr-3'
          },

        ];
        this.buttonsLabel = [
          {
            label: 'Login',
            route: '/auth',
            icon: 'pi pi-fw pi-sign-in'
          }


        ];
        break;
      case '/admin/users':
      case '/admin/reports':
      case '/admin/publications':
      case '/admin/transactions':
        this.item = [
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
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            routerLink: '/index',
            styleClass: 'md:mr-3'
          },

        ];
        break;

      case '/user/wallet':
      case '/user/movements':
      case '/user/exchange':
      case '/user/generate':
        this.item = [
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
              (this.modals!.show(5))
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            routerLink: '/index',
            styleClass: 'md:mr-8',
          },
        ];
        break;
      case '/auth/login':
      case '/auth/register':
        this.item = [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: '/auth/login',
            styleClass: 'md:mr-3'

          },
          {
            label: 'Register',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: '/auth/register',
          }

        ];

    }

  }


  changeTheme(checked: boolean) {
    if (!checked) {
      this.theme = 'md-light-deeppurple';
      this.themeService.switchTheme(this.theme);
    } else {
      this.theme = 'md-dark-deeppurple'
      this.themeService.switchTheme(this.theme)

    }
  }
}
