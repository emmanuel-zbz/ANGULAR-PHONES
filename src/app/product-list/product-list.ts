import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../services/ProductService';
import {Product} from '../models/product';
import {ProductAlerts} from '../product-alerts/product-alerts';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductAlerts
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  /*
    Este código funciona si tuviéramos los datos puestos en una constante json como en todos los exámenes
    Bastaría con tenerlo en un archivo, importarlo y referenciarlo aquí
    products = [...products];
  */

  //Inyectamos el servicio. Es bastante similar a Spring Boot. Pensarlo de ese modo es útil.
  private productoService = inject(ProductService);

  //Creamos la variable para manejar los productos. Vamos a inicializarlo como un signal vacío, ya que los datos vienen luego de arrancar la app.
  //Para gestionar los datos lo haremos en el constructor.
  products = signal<Product[]>([]);

  //Una vez que el componente nace, gestionamos los datos. Para dejar de ensuciar la clase, escribiré abajo lo que pasa.
  constructor() {
    this.productoService.getProducts().subscribe((data) => this.products.set(data));
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/**
 * El metodo del constructor hace lo siguiente:
 *
 * this.productoService.getProducts() -> Esto ejecuta el consumo de datos gracias a la libreria HttpClient. Se hace un GET al Json.
 * Como mencioné en el servicio, un GET devuelve un observable. Una peculiaridad es que los observables son "perezosos", es decir, si no hay NADIE
 * suscritos a ellos, Angular ni siquiera va a lanzar la petición GET. Es por esto que después de getProducts() NOS SUSCRIBIMOS
 *
 *
 * .suscribe((data) => this.products.set(data)) -> Esto significa: Una vez que te lleguen los datos pedidos en getProductos ejecuta este codigo.
 *
 * Como products es un signal tenemos disponibles sus métodos .set y .update.
 * Entonces, una vez lleguen los datos, decimos que ESOS datos se seteen a nuestra variable products.
 */
