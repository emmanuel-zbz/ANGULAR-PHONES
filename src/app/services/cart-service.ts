import {inject, Injectable, signal} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Shipping} from '../models/shipping';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private http = inject(HttpClient)


  //Inicializamos un signal que es una lista que usaremos como conteo de carrito. La inicializamos vacia con el ([]).
  private items = signal<Product[]>([]);


  //Esta seria la lista que deberiamos enviar a componentes, para que sea mas segura, ya que es un readOnly.
  _items = this.items.asReadonly();


  //El metodo es sencillo, coge la lista actual, y le hace un un update. Copia todo lo anterior y le añade el nuevo producto al final
  addToCart(product: Product) {
    this.items.update(currentItems => [...currentItems, product]);
  }

  getItems() {
    return this.items();
  }

  clearCart() {
    this.items.set([]);
  }

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }
}
