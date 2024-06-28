import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { SharedModule } from '../modules/shared.modules';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Product } from '../models/products.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule, ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public fbService: FirebaseService
  ) { }

  data: any;

  ngOnInit(): void {
    this.data = this.productService.getAllProduct()
  }

  removeItems(i: number) {
    this.productService.removeItems(i);
  }
  @ViewChild('formup', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  //form update form service
  formupdate = this.productService.formupdate;

  updateItem() {
    this.productService.updateItem();
  }

  addCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
