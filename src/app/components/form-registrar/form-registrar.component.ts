import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-registrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-registrar.component.html',
  styleUrl: './form-registrar.component.css',
})
export class FormRegistrarComponent {
  registerForm: FormGroup;

  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthDate: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        rolesId: this.fb.array([], Validators.required),
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(
    group: AbstractControl
  ): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.formSubmit.emit(this.registerForm.value);
    }
  }

  roles = [
    { id: 1, name: 'Alugar' },
    { id: 2, name: 'Vendedor' },
  ]; // exemplo

  get rolesArray() {
    return this.registerForm.get('rolesId') as FormArray;
  }

  onRoleChange(event: any, index: number) {
    if (event.target.checked) {
      this.rolesArray.push(new FormControl(this.roles[index].id));
    } else {
      const i = this.rolesArray.controls.findIndex(
        (x) => x.value === this.roles[index].id
      );
      this.rolesArray.removeAt(i);
    }
  }
}
