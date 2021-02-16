import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home/home.component';
import { ContainerRegisterComponent } from './components/register/container-register/container-register.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesComponent } from './components/home/notes/notes.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/register/login/login.component';

const routes: Routes = [
  {path:'inicio', component: HomeComponent,
  children: [
    {path:'principal', component: CreateNoteComponent},
    {path:'notas', component: NotesComponent},
    {path:'', pathMatch:'full',redirectTo:'principal'},
    {path:'**', pathMatch:'full',redirectTo:'principal'}
  ]},
  {path:'acceso', component: ContainerRegisterComponent, canActivate: [AuthGuard],
  children: [
    {path:'iniciar-sesion', component: LoginComponent},
    {path:'registro', component: RegisterComponent},
    {path:'', pathMatch:'full',redirectTo:'registro'},
    {path:'**', pathMatch:'full',redirectTo:'registro'}
  ]},
  {path:'', pathMatch:'full',redirectTo:'inicio'},
  {path:'**', pathMatch:'full',redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
