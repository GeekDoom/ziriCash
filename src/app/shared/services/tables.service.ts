import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Dashboard, Movements } from '../../modules/interfaces/tables';
import { User } from 'src/app/modules/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) { }
  getMovements(): Observable<Movements[]> {
    return this.http.get<Movements[]>('assets/movements.json')
      .pipe(map(mov => mov))
  }
  getDash(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>('assets/dashboard.json')
      .pipe(map(dash => dash))
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/account-data.json')
      .pipe(map(user => user))
  }

}
