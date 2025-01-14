## Cliente HTTP

Angular proporciona el servicio `HttpClient` para realizar solicitudes HTTP a servidores externos, facilitando la interacción con APIs y otros recursos web. En resumen, los formularios manejados por plantillas en Angular proporcionan una forma sencilla de manejar formularios sin necesidad de lógica compleja, mientras que los formularios reactivos ofrecen mayor control y flexibilidad. 

* __Simplicidad__: Utilizando observables, realizar peticiones es sencillo y directo para manejar las respuestas asincrónicas.
* __Manejo de Errores__: Permite gestionar errores en las respuestas de manera eficiente.
* __Observables__: RxJS hace que trabajar con respuestas asincrónicas sea más flexible y fácil de manejar.

### Solicitud HTTP

Para realizar una solicitud GET a un servidor, se puede utilizar el método `get` de `HttpClient`.

```typescript
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
})
export class MiComponente {
  constructor(private http: HttpClient) {}

  obtenerDatos() {
    this.http.get('https://api.example.com/datos')
    .subscribe(response => { console.log(response) });
  }
}
```

### Manejo de Errores

Angular facilita el manejo de errores mediante el uso de operadores de RxJS como `catchError`.

```ts
this.http.get('https://api.example.com/datos')
  .pipe(catchError(error => { 
    console.error('Error al obtener datos', error); 
    return of([]); 
  }))
  .subscribe(response => { console.log(response) });
```

## RxJS y Observables

__Reactive Extensions for JavaScript__ es una biblioteca para la programación reactiva utilizando observables, que permite manejar flujos de datos asincrónicos y eventos de manera eficiente.

* __Reactividad__: Los observables permiten manejar flujos de datos de manera reactiva, lo que facilita el trabajo con eventos asincrónicos como las respuestas HTTP.
* __Composición de Operadores__: RxJS ofrece una amplia variedad de operadores para transformar, combinar y manejar datos de manera declarativa.
* __Manejo de Errores__: RxJS proporciona operadores como `catchError` y `retry` para manejar errores en los flujos de datos.

### Crear un Observable

```ts
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('¡Hola!');
  subscriber.next('Mundo!');
  subscriber.complete();
});

observable.subscribe({
  next(value){ console.log(value) },
  complete(){ console.log('Completado') }
});
```

### Operadores RxJS

Esta biblioteca tiene una gran cantidad de operadores para transformar los flujos de datos, como `map`, `filter`, `mergeMap`, etc.

```ts
import { map } from 'rxjs/operators';

this.http.get('https://api.example.com/datos')
  .pipe(map(response => response['nombre']))
  .subscribe(nombre => console.log(nombre));
```