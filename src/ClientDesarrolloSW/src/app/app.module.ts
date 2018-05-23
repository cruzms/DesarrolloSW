import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Servicios
import { ProfesorService } from './services/profesor.service';
import { ActividadService } from './services/actividad.service';
import { MateriaService } from './services/materia.service';
import { GrupoService } from './services/grupo.service';
import { TemaService } from './services/tema.service';
import { NuevaactividadComponent } from './components/nuevaactividad/nuevaactividad.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevaActividad', component: NuevaactividadComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevaactividadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProfesorService,
    ActividadService,
    MateriaService,
    GrupoService,
    TemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
