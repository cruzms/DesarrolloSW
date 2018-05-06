import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ComputadorService } from '../../services/computador.service';
import { Computador } from '../../models/Computador';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {
  id: String;
  marca: String;
  modelo: String;
  discoduro: Number;
  ram: Number;
  procesador: String;
  pulgadas: Number;
  disponible: Boolean;
  computadores: Computador[];

  constructor(private computadorService: ComputadorService, private flashService: FlashMessagesService) {

  }

  ngOnInit() {
    this.computadorService.getComputadores().subscribe(data => {
      this.computadores = data;
    });
  }

  addComputador() {
    const newComputador = {
      marca: this.marca,
      modelo: this.modelo,
      discoduro: this.discoduro,
      ram: this.ram,
      procesador: this.procesador,
      pulgadas: this.pulgadas,
      disponible: this.disponible
    };

    this.computadorService.addComputador(newComputador).subscribe(data => {
      this.flashService.show(data.message, { cssClass: 'alert-success', timeout: 1000 });
      this.computadores.push(data.object);
    },
      err => {
        const errores = err.error.message.errors;
        for (const key in errores) {
          this.flashService.show(errores[key].message, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
  }

  cargarComputadorUpdate(computador) {
    this.id = computador._id;
    this.marca = computador.marca;
    this.modelo = computador.modelo;
    this.discoduro = computador.discoduro;
    this.ram = computador.ram;
    this.procesador = computador.procesador;
    this.pulgadas = computador.pulgadas;
    this.disponible = computador.disponible;
  }

  updateComputador() {
    const newComputador = {
      _id: this.id,
      marca: this.marca,
      modelo: this.modelo,
      discoduro: this.discoduro,
      ram: this.ram,
      procesador: this.procesador,
      pulgadas: this.pulgadas,
      disponible: this.disponible
    };

    this.computadorService.updateComputador(newComputador).subscribe(data => {
      this.flashService.show(data.message, { cssClass: 'alert-success', timeout: 1000 });
      const computador = this.computadores.find(computador => computador._id === newComputador._id);
      const index = this.computadores.indexOf(computador);
      this.computadores[index] = newComputador;
    }, err => {
      this.flashService.show('Ha ocurrido un error', { cssClass: 'alert-danger', timeout: 3000 });
    });
  }

  deleteComputador(id) {
    this.computadorService.deleteComputador(id).subscribe(data => {
      this.flashService.show(data.message, { cssClass: 'alert-success', timeout: 1000 });
      this.computadores = this.computadores.filter(computador => computador._id !== id);
    }, err => {
      this.flashService.show('Ha ocurrido un error', { cssClass: 'alert-danger', timeout: 3000 });
    });
  }
}
