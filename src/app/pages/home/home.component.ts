import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuSecoesComponent } from '../../components/menu-secoes/menu-secoes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuSecoesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
