import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = localStorage.getItem('Theme')!;

   }
    
   switchTheme(theme: string) {
     let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
     if (themeLink) {
       themeLink.href = theme + ".css";
       localStorage.setItem('Theme', theme + '.css');
       console.log(localStorage)
     }
   }

}
