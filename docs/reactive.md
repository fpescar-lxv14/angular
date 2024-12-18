## Reactive Forms

Estos formularios ofrecen un enfoque más flexible y potente, permitiendo un mayor control sobre el estado del mismo y las validaciones, y favoreciendo la reactividad del flujo de datos.

### Definición

A diferencia de los formularios manejados por plantillas, los formularios reactivos son más dinámicos y se configuran en el componente utilizando clases como `FormGroup`, `FormControl`, y `FormArray`.

```typescript
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('')
  });
}
```

### Vinculación

En la plantilla, se usa la directiva `formControlName` para vincular los controles del formulario a los elementos del DOM.

```html
<form [formGroup]="form">
  <label for="name">Nombre:</label>
  <input id="name" formControlName="name" />
  <div *ngIf="form.get('name')?.invalid">
    El nombre es obligatorio.
  </div>
</form>
```

### Validación

En los formularios reactivos, las validaciones son parte de la configuración del formulario y se pueden gestionar dinámicamente.

```typescript
this.form = new FormGroup({
  name: new FormControl('', [Validators.required]),
  age: new FormControl('', [Validators.min(18)])
});
```

[Volver](../readme.md)