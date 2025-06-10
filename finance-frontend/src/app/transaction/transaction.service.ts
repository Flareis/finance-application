import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../shared/models/transaction.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private api = 'http://localhost:3000/transaction';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.api);
  }

  getByAccountId(account_id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.api}/findAccountId/${account_id}`);
  }

  create(transaction: Partial<Transaction>): Observable<Transaction> {
    return this.http.post<Transaction>(this.api, transaction);
  }
}