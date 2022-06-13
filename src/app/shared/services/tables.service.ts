import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Dashboard, Movements, Transactions } from '../../modules/interfaces/tables';
import { User } from 'src/app/modules/interfaces/users';
import { Reports } from 'src/app/modules/interfaces/report';

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
  getReports(): Observable<Reports[]> {
    return this.http.get<Reports[]>('assets/reports.json')
      .pipe(map(rep => rep))
  }
  getTransactions(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>('assets/transactions.json')
      .pipe(map(tran => tran))
  }

}
