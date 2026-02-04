import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  // Este es el metodo que vamos a usar para coger datos en el componente, en vez de gestionarlo todo ahi.
  getProducts() {
    return this.http.get<Product[]>('/assets/products.json');
  }

}

/**
 * Este servicio se hace para llevar mejores practicas. En él podemos ver que usamos la libreria de HttpClient para trabajar con jsons
 * en vez de con "json's" en una constante.
 *
 * La variable http tiene los verbos de HTTP (obvio). -> EL METODO .get DEVUELVE UN OBSERVABLE no el objeto esperado per se.
 *
 * En el metodo podemos ver "< >". Esto se llaman genericos, sirven para "prometerle" a Angular el tipo de dato que debe esperar.
 * En este caso espera un array de Productos. Se puede omitir, pero ayuda a detectar errores tempranos y no cuesta nada.
 *
 * Todos los comentarios son mios chaval q t piensas q lo ha exo una ia e aki hay kalidad
 */
