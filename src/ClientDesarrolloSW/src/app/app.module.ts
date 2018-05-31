import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Servicios
import { ProfesorService } from './services/profesor.service';
import { EstudianteService } from './services/estudiante.service';
import { ActividadService } from './services/actividad.service';
import { MateriaService } from './services/materia.service';
import { GrupoService } from './services/grupo.service';
import { TemaService } from './services/tema.service';
import { ArchivoService } from './services/archivo.service';
import { ValidardatosService } from './services/validardatos.service';
import { NuevaactividadComponent } from './components/nuevaactividad/nuevaactividad.component';
import { validateConfig } from '@angular/router/src/config';
import { ConsultarmateriasComponent } from './components/consultarmaterias/consultarmaterias.component';
import { ActividadesestudianteComponent } from './components/actividadesestudiante/actividadesestudiante.component';
import { CustomOnChangeDirective } from './directives/custom-on-change.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevaActividad', component: NuevaactividadComponent },
  { path: 'materiasEstudiante', component: ConsultarmateriasComponent },
  { path: 'ActividadesEstudiante', component: ActividadesestudianteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevaactividadComponent,
    ConsultarmateriasComponent,
    ActividadesestudianteComponent,
    CustomOnChangeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProfesorService,
    EstudianteService,
    ActividadService,
    MateriaService,
    GrupoService,
    TemaService,
    ArchivoService,
    ValidardatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
