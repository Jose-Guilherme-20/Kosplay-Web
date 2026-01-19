import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../../services/roles.service';

@Component({
  selector: 'app-form-registrar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './form-registrar.component.html',
  styleUrl: './form-registrar.component.css',
})
export class FormRegistrarComponent implements OnInit {
  registerForm: FormGroup;
  roles: Role[] = [];

  @Output() formSubmit = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthDate: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        rolesId: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator },
    );
  }

  ngOnInit(): void {
    // Recupera as roles resolvidas do resolver
    this.route.data.subscribe((data) => {
      this.roles = data['roles'] || [];
    });
  }

  passwordsMatchValidator(
    group: AbstractControl,
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
}
