import { Validators } from "@angular/forms"

export const nameValidation = [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]
export const emailValidation = [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[^@\W]+@\w+(\.\w+)*/),
  ]
export const passwordValidation = [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?:(?=.*[A-Z])+(?=.*[a-z])+(?=.*[\d])+(?=.*[\W])).{8,}$/)
]