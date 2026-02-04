import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  // Este es el metodo que vamos a usar para coger datos en el componente, en vez de gestionarlo todo ahi.
  getProducts() {
    return this.http.get<Product[]>('/assets/products.json');
  }

  getProductoById(idBuscado: number){
    return this.getProducts()
      .pipe(
        map(allProducts => allProducts.find( p => p.id === idBuscado)));
  }

  /**
   * Este metodo es bastante declarativo, pero para asegurar una completa comprension voy a desglosarlo:
   *
   * Usamos el metodo que definimos antes, ya que de por sí gestiona la carga de TODOS los datos
   * (si por ejemplo no existiese, deberiamos hacerlo nosotros mismos como primer paso).
   *
   * .pipe() -> Sirve para que una vez recibido lo esperado con el metodo se ejecute la siguiente logica (se escribe en el pipe).
   * Es similar al pipelining que llevamos viendo todo el año.
   *
   * Dentro del pipe, una vez recibidos todos los productos, hacemos un .map() para, de entre todos los productos, quedarnos con solo 1.
   *
   * Dentro del map, para buscar ese UNICO producto que queremos podemos usar el .find() y poner nuestro criterio para buscarlo. En este caso el id
   *
   * Este metodo, al igual que el getProducts(), NO DEVUELVE EL DATO ESPERADO; DEVUELVE UN OBSERVABLE.
   *
   * Hay que tener en especial cuenta que devuelve un observable, y alli donde queramos recibir el dato, debemos suscribirnos a este observable primero.
   */

}

/**
 * Este servicio se hace para llevar mejores practicas. En él podemos ver que usamos la libreria de HttpClient para trabajar con jsons
 * en vez de con "json's" en una constante.
 *
 * La variable http tiene los verbos de HTTP (obvio). -> EL METODO .get DEVUELVE UN OBSERVABLE no el objeto esperado per se.
 *
 * En el metodo podemos ver "< >". Esto se llaman genericos, sirven para "prometerle" a Angular el tipo de dato que debe esperar.
 * En este caso espera un array de Productos.
 *
 * Se puede omitir, pero ayuda a detectar errores tempranos y no cuesta nada.
 *
 * Todos los comentarios son mios chaval q t piensas q lo ha exo una ia ehhhh aki hay kalidad
 */
