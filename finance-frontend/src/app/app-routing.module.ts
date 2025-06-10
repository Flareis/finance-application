import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}