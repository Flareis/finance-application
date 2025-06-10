import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/accounts">Accounts</a>
      <a routerLink="/transactions">Transactions</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}