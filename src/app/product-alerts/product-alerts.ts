import {Component, input, output} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alerts.html',
  styleUrl: './product-alerts.css',
})
export class ProductAlerts {

  //Angular 21 deja atras los decoradores como @Input y usa los signal inputs. Son reactivos y pueden ser más estrictos.
  product = input.required<Product>();


  //De nuevo, Angular 21 usa los outputs de este modo, sin declarar EventEmitters aqui.
  notify = output()


}
