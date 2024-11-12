import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SubordinadoComponent } from './components/subordinado/subordinado.component';

export const routes: Routes = [
    {path: '',  component: LoginComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'subordinado', component: SubordinadoComponent},
];
