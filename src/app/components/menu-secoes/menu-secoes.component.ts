import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-menu-secoes',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu-secoes.component.html',
  styleUrl: './menu-secoes.component.css',
})
export class MenuSecoesComponent {
  activeTab: 'categorias' | 'populares' | 'promocao' | 'parcerias' =
    'categorias';

  setTab(tab: 'categorias' | 'populares' | 'promocao' | 'parcerias') {
    this.activeTab = tab;
  }
}
