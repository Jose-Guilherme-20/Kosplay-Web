import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário enviado com sucesso:', this.form.value);
    } else {
      console.log(
        'Formulário inválido. Por favor, preencha todos os campos corretamente.'
      );
    }
  }

  RedirectToRegister(): void {
    this.router.navigate(['/registrar']);
  }
}
