import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Role {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private roles: Role[] = [
    { id: 1, name: 'Alugar' },
    { id: 2, name: 'Vendedor' },
  ];

  constructor() {}

  getRoles(): Observable<Role[]> {
    // Simula uma chamada HTTP. Substitua por uma chamada real quando necessário
    return of(this.roles);
  }
}
