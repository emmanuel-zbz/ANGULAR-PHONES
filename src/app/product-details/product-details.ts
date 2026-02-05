import {Component, inject, input, numberAttribute, signal, OnInit, computed} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/ProductService';
import {CurrencyPipe, NgClass} from '@angular/common';
import {CartService} from '../services/cart-service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {


  /**
   * productId, sera el atributo donde guardaremos el id que nos viene en la URL.
   *
   * Por defecto, la URL es un string, asi que VAMOS a pasarlo a un numero con la caracteristica transfrom
   *
   * Que el input tenga 2 variables dentro del generico quiere decir (de izquierda a derecha) -> Va a terminar siendo un number pero al principio era un string
   *
   * De nuevo, se puede hacer de manera imperativa, haciendo que primero fuera un input signal de tipo String,
   * luego crear una constante y parsear ese input.signal<string> a numero con Number()
   *
   * UNA COSA IMPORTANTE:
   *
   * El nombre de la variable (productId en este caso) DEBE SI O SI SER EL MISMO NOMBRE QUE DEFINIMOS EN LA VARIABLE DE URL app.routes.ts
   *
   * "products/:productId" -> Esto posibilita que Angular coja el input automaticamente, de otra forma no funcionaria o seria escribir mas codigo.
   */
  productId = input.required<number, string>({transform: numberAttribute});


  //Declaramos que la variable es un signal de product O un signal de undefined.
  //Lo inicializamos a undefined (es decir, cuando se cree valdrá de primeras undefined)
  product = signal<Product | undefined>(undefined);




  private productService = inject(ProductService);
  private cartService = inject(CartService);


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(product);
    window.alert("Tu producto ha sido añadido")

  }


  ngOnInit() {

    this.productService.getProductoById(this.productId()).subscribe((productoEncontrado) => this.product.set(productoEncontrado));


  }

}
