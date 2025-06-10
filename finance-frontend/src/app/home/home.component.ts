import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AccountListComponent } from '../accounts/account-list/account-list.component';
import { TransactionListComponent } from '../transaction/transaction-list/transaction-list.component';
;

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <h1>Welcome to Finance Application!</h1>
      <p>
        Manage your accounts and transactions easily.<br>
        Use the menu above to navigate through the system.
      </p>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Finance" width="120" style="margin-top:2rem;">
    </section>
  `,
  styles: [`
    section {
      text-align: center;
      margin-top: 3rem;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  `]
})
export class HomeComponent {}

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'accounts', component: AccountListComponent },
  { path: 'transactions', component: TransactionListComponent }
];