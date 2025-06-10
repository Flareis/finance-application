import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../../shared/models/account.model';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Accounts</h2>
    <ul>
      <li *ngFor="let account of accounts">
        {{ account.account_id }} - {{ account.limit }} - {{ account.products }}
      </li>
    </ul>
  `
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAll().subscribe(data => this.accounts = data);
  }
}