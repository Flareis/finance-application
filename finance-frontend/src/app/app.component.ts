import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/accounts" routerLinkActive="active">Accounts</a>
      <a routerLink="/transactions" routerLinkActive="active">Transactions</a>
    </nav>
    <main class="container">
      <h1>Welcome to Finance Application!</h1>
      <p>
        Manage your accounts and transactions easily.<br>
        Use the menu above to navigate.
      </p>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      background: #1976d2;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
    .navbar a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .navbar a.active, .navbar a:hover {
      background: #1565c0;
    }
    .container {
      max-width: 900px;
      margin: 2rem auto;
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
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
export class AppComponent {}