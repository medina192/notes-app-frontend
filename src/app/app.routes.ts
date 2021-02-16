import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ContainerRegisterComponent } from './components/register/container-register/container-register.component';

export const ROUTES: Routes = [
    {path:'principal', component: HomeComponent},
    {path:'acceso', component: ContainerRegisterComponent},
    {path:'', pathMatch:'full',redirectTo:'principal'},
    {path:'**', pathMatch:'full',redirectTo:'principal'},
];

