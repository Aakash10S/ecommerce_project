import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './guards/auth-guard';
import { CartComponent } from './cart/cart.component';
import { OrderConfigurationComponent } from './order-configuration/order-configuration.component';
import { RegisterComponent } from './register/register.component';
import { OrderHistory } from './order-history/order-history.component';
import { CheckoutComponent } from './checkout/checkout.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },

  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  { 
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers:'always'
  },
  {
  path: 'cart',
  component: CartComponent,
  canActivate: [AuthGuard]
},
 {
  path: 'order-confirmation',
  component: OrderConfigurationComponent,
  canActivate: [AuthGuard]
},

{ path: 'register', component: RegisterComponent },

{
  path:'order-history',
  component:OrderHistory,
  canActivate: [AuthGuard]
},

{
 path: 'checkout',
 component: CheckoutComponent,
 canActivate: [AuthGuard]
}

];