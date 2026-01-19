import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AuthGuard } from './services/guards/AuthGuard';
import { HomeComponent } from './pages/home/home.component';
import { RolesResolver } from './services/guards/RolesResolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard], // protege a rota da home para acessar só estando logado
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
    resolve: { roles: RolesResolver },
  },
  {
    path: '**',
    redirectTo: '', // redireciona qualquer rota não reconhecida para a home (pode alterar para página 404 se desejar)
  },
];
