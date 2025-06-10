import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../shared/models/account.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private api = 'http://localhost:3000/account';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.api);
  }

  getById(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.api}/${id}`);
  }

  create(account: Partial<Account>): Observable<Account> {
    return this.http.post<Account>(this.api, account);
  }
}