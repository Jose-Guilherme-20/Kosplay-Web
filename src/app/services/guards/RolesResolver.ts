import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService, Role } from '../roles.service';

@Injectable({
  providedIn: 'root',
})
export class RolesResolver implements Resolve<Role[]> {
  constructor(private rolesService: RolesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Role[]> {
    return this.rolesService.getRoles();
  }
}
