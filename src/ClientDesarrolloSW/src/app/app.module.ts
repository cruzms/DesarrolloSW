import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Componentes
import { AppComponent } from './app.component';
import { CarroComponent } from './components/carro/carro.component';
import { ComputadorComponent } from './components/computador/computador.component';
import { HomeComponent } from './components/home/home.component';

//Servicios
import { CarroService } from './services/carro.service';
import { ComputadorService } from "./services/computador.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carros', component: CarroComponent },
  { path: 'computadores', component: ComputadorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    ComputadorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    CarroService,
    ComputadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
