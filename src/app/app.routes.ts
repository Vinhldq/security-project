import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: ProductComponent
    },
    {
        path: 'cart', component: ShoppingCartComponent
    },
    {
        path: 'product-management', component: ProductManagementComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
];

