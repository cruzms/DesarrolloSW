import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CarroService } from './services/carro.service';

import { AppComponent } from './app.component';
import { CarroComponent } from './components/carro/carro.component';


@NgModule({
  declarations: [
    AppComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
