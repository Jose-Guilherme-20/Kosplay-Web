import { Component } from '@angular/core';
import { FormRegistrarComponent } from '../../components/form-registrar/form-registrar.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormRegistrarComponent],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  constructor(private authService: AuthService) {}

  onFormSubmit(formData: User) {
    console.log('Form Data:', formData);
    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Aqui você pode redirecionar o usuário ou mostrar mensagem
      },
      error: (error) => {
        console.error('Registration error', error);
        // Mostrar mensagem de erro para o usuário
      },
    });
  }
}
