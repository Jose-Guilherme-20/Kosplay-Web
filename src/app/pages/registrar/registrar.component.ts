import { Component } from '@angular/core';
import { FormRegistrarComponent } from '../../components/form-registrar/form-registrar.component';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormRegistrarComponent],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {}
