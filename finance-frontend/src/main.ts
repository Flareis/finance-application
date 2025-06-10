import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { AccountListComponent } from './app/accounts/account-list/account-list.component';
import { TransactionListComponent } from './app/transaction/transaction-list/transaction-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'accounts', component: AccountListComponent },
      { path: 'transactions', component: TransactionListComponent }
    ])
  ]
})
  .catch(err => console.error(err));