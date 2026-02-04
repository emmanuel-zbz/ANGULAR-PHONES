import {Component, inject,} from '@angular/core';
import {CartService} from '../services/cart-service';
import {CurrencyPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private cartService = inject(CartService);

  // ESTE ES UN PUNTERO QUE VA HACIA LA LISTA DE ITEMS DEL CARTSERVICE
  items = this.cartService._items;


  private formBuilder = inject(FormBuilder);

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  onSubmit() {
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
