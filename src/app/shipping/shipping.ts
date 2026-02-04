import {Component, inject} from '@angular/core';
import {CartService} from '../services/cart-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-shipping',
  imports: [
    AsyncPipe
  ],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping {

  private cartService = inject(CartService);

  shippingCosts = this.cartService.getShippingPrices();
}
