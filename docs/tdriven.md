## Template Driven Forms

Los formularios manejados por plantillas permiten que el desarrollo sea más sencillo al mantener la lógica de validación y manejo de estados dentro de las plantillas, mientras que el componente se encarga de la interacción con los datos.

* __Reactividad__: Aunque los formularios manejados por plantillas no son reactivos, permiten manejar la validación y los estados del formulario de manera eficiente.
* __Simplicidad__: La estructura es sencilla, ya que la lógica de los formularios se maneja mayormente en el HTML.
* __Accesibilidad__: La integración con formularios en plantillas permite que los formularios sean accesibles para la mayoría de las aplicaciones.
* __Modularidad__: Se puede incluir la lógica de los formularios en un solo componente o dividirlos en partes según sea necesario.

### Estructura

Los formularios manejados por plantillas se gestionan utilizando la directiva `ngForm` y otras directivas como `ngModel`.

```html
<form #form="ngForm">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" [(ngModel)]="nombre" name="nombre" required />
  <button [disabled]="form.invalid">Enviar</button>
</form>
```

* __ngForm__: Crea un formulario y mantiene el estado de sus controles.
* __[(ngModel)]__: Es la vinculación bidireccional que conecta el modelo con el formulario.
* __form.invalid__: Deshabilita el botón de envío si el formulario no es válido.

### Validación

Tambien permiten validaciones de una forma simple. Se pueden agregar reglas de validación a los campos del formulario utilizando atributos HTML o directivas de Angular.

```html
<form #form="ngForm">
  <input type="text" [(ngModel)]="nombre" name="nombre" required />
  <div *ngIf="nombre?.invalid && nombre?.touched">
    El nombre es obligatorio.
  </div>
</form>
```

### Estado

Se puede obtener el estado del formulario y sus campos, como `valid`, `invalid`, `pristine`, `dirty`, entre otros, para realizar diferentes acciones según el estado de los datos.

```html
<p>Formulario válido: {{ form.valid }}</p>
<p>Formulario sucio: {{ form.dirty }}</p>
```

[Volver](../readme.md)