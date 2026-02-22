import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu-secoes-content',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './menu-secoes-content.component.html',
  styleUrl: './menu-secoes-content.component.css',
})
export class MenuSecoesContentComponent {
  @Input({ required: true }) items: string[] = [];
}
