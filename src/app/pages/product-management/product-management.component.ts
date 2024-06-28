import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../modules/shared.modules';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { DocumentData } from '@angular/fire/firestore';
import { ProductService } from '../../services/product/product.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  // testValue = new FormControl(true);
  constructor(
    public productService: ProductService,
    public fbService: FirebaseService
  ) {}
  updateForm: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    quantity: new FormControl(''),
  });

  addItemForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    price: new FormControl(0,[Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]),
    description: new FormControl(''),
    image: new FormControl(''),
    quantity: new FormControl(0,[Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]),
  });

  openAddDialog = false;

  openUpdateDialog = false;

  showAddDialog():void {
    this.openAddDialog = true;
    console.log(this.openAddDialog);
  }

  add() {
    this.fbService.add(this.addItemForm.value);
    this.addItemForm.reset();
  }

  showUpdateDialog(item: DocumentData) {
    this.openUpdateDialog = true;
    this.updateForm.setValue(item);
  }
  update() {
    let item = {
      id: this.updateForm.controls['id'].value,
      ...this.updateForm.value,
    };
    this.fbService.update(item);
    this.updateForm.reset();
    this.openUpdateDialog = false;
  }

  delete(item: DocumentData) {
    this.fbService.delete(item).then();
  }

}
