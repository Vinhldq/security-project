import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { CartService } from '../../services/cart/cart.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Product } from '../models/products.models';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiIslandModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  totalPrice = 0;

  constructor(public cartService: CartService, public fbService: FirebaseService, private router: Router) {
    this.totalPrice = this.cartService.totalPrice();
  }

  closeDialog() {
    this.router.navigate(['/home']);
  }

  removeItems(item: Product) {
    this.cartService.removeItems(item);
    this.totalPrice = this.cartService.totalPrice();
  }

  updateCart(i: number) {
    this.cartService.addItems(i);
    this.totalPrice = this.cartService.totalPrice();
  }

  removeQuantity(i: number) {
    this.cartService.removeQuantity(i);
    this.totalPrice = this.cartService.totalPrice();
  }

  openSnackBar() {
    window.alert('Cám ơn bạn đã mua hàng!!!');
    this.closeDialog();
  }
}
