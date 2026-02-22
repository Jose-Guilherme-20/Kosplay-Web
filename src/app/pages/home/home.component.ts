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
export class HomeComponent {
  categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
  populares = ['Produto Popular 1', 'Produto Popular 2', 'Produto Popular 3'];
  promocoes = ['Promoção 1', 'Promoção 2', 'Promoção 3'];
  parcerias = ['Parceria 1', 'Parceria 2', 'Parceria 3'];
}
