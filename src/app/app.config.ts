import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),

  ]
};

/**
 * Angular nos hace el trabajo de rescatar una variable que necesitamos usar desde una ruta con "withComponentInputBinding".
 *
 * Funciona similar a los antiguos @Input y los nuevos input signal pero de manera "semiautomatica"
 *
 * Como en app.routes.ts construimos una ruta que definimos como /products/:productId -> Los " : " le dice a Angular que es una variable
 * Entonces con la libreria mencionada, podemos darle una pista a Angular para que sepa de DONDE coger esa variable en nuestro componente.
 *
 * Lo mas practica, para separar responsabilidades es seguir usando el servicio de productos. Ya tenemos un metodo para coger todos los productos,
 * ahora bastaria con hacer uno para coger productos en base a un id que pasemos. ESE id lo recogemos de la ruta con la libreria que no paro de mencionar
 *
 * Para ver como lo hacemos, mira el codigo del servicio y luego la clase donde vamos a usar ese servicio (el product-details)
 */
