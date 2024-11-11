import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CashierComponent } from './components/cashier/cashier.component';
import { ProductComponent } from './components/product/product.component';
import { EventComponent } from './components/event/event.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cashier', component: CashierComponent },
  { path: 'product', component: ProductComponent },
  { path: 'event', component: EventComponent },
];
