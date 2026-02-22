import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuSecoesContentComponent } from '../menu-secoes-content/menu-secoes-content.component';
@Component({
  selector: 'app-menu-secoes',
  standalone: true,
  imports: [CommonModule, MatIconModule, MenuSecoesContentComponent],
  templateUrl: './menu-secoes.component.html',
  styleUrl: './menu-secoes.component.css',
})
export class MenuSecoesComponent {
  activeTab: 'categorias' | 'populares' | 'promocao' | 'parcerias' =
    'categorias';

  setTab(tab: 'categorias' | 'populares' | 'promocao' | 'parcerias') {
    this.activeTab = tab;
  }

  @Input({ required: true }) categorias: string[] = [];
  @Input({ required: true }) populares: string[] = [];
  @Input({ required: true }) promocoes: string[] = [];
  @Input({ required: true }) parcerias: string[] = [];
}
