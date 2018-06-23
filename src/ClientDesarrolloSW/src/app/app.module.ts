import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Servicios
import { ProfesorService } from './services/profesor.service';
import { EstudianteService } from './services/estudiante.service';
import { ActividadService } from './services/actividad.service';
import { RetoService } from './services/reto.service';
import { TemaService } from './services/tema.service';
import { ArchivoService } from './services/archivo.service';
import { ValidardatosService } from './services/validardatos.service';
import { NuevaactividadComponent } from './components/nuevaactividad/nuevaactividad.component';
import { validateConfig } from '@angular/router/src/config';
import { ConsultarmateriasComponent } from './components/consultarmaterias/consultarmaterias.component';
import { ActividadesestudianteComponent } from './components/actividadesestudiante/actividadesestudiante.component';
import { CustomOnChangeDirective } from './directives/custom-on-change.directive';
import { NuevoretoComponent } from './components/nuevoreto/nuevoreto.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevaActividad', component: NuevaactividadComponent },
  { path: 'nuevoReto', component: NuevoretoComponent },
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
    CustomOnChangeDirective,
    NuevoretoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MultiselectDropdownModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProfesorService,
    EstudianteService,
    ActividadService,
    RetoService,
    TemaService,
    ArchivoService,
    ValidardatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
