import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../../shared/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Transactions</h2>
    <ul>
      <li *ngFor="let transaction of transactions">
        {{ transaction.account_id }} - {{ transaction.transaction_count }}
      </li>
    </ul>
  `
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getAll().subscribe(data => this.transactions = data);
  }
}