import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Product } from "./pages/models/products.models";
import { Auth, onAuthStateChanged } from "@angular/fire/auth";
import { NavbarComponent } from "./pages/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'demo';
  products: Product[] = [];
  currentId: number = this.products.length + 1;
  addItem(newItem: Product) {
    this.products.push(newItem);
  }
  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.router.navigate(['home']);
        // ...
      } else {
        console.log('user is not signed in');
        this.router.navigate(['login']);
        // User is signed out
        // ...
      }
    });
  }
}
