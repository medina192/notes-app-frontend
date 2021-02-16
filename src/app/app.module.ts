import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/register/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { NotesComponent } from './components/home/notes/notes.component';
import { ContainerRegisterComponent } from './components/register/container-register/container-register.component';
import { SavednotesComponent } from './components/home/savednotes/savednotes.component';
import { NewnotesComponent } from './components/home/newnotes/newnotes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesviewComponent } from './components/home/notesview/notesview.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotesComponent,
    ContainerRegisterComponent,
    SavednotesComponent,
    NewnotesComponent,
    CreateNoteComponent,
    NotesviewComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
