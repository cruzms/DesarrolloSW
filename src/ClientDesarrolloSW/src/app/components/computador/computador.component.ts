import { Component, OnInit } from '@angular/core';
import { ComputadorService } from "../../services/computador.service";
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

  constructor(private computadorService: ComputadorService) {

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
    }

    this.computadorService.addComputador(newComputador).subscribe(data => {
      console.log(data);
    });
    this.computadores.push(newComputador);
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
      id: this.id,
      marca: this.marca,
      modelo: this.modelo,
      discoduro: this.discoduro,
      ram: this.ram,
      procesador: this.procesador,
      pulgadas: this.pulgadas,
      disponible: this.disponible
    }

    this.computadorService.updateComputador(newComputador).subscribe(data => {
      console.log(data);
      const computador = this.computadores.find(computador => computador._id == newComputador.id);
      const index = this.computadores.indexOf(computador);
      this.computadores[index] = newComputador;
    });
  }

  deleteComputador(id) {
    this.computadorService.deleteComputador(id).subscribe(data => {
      console.log(data);
      this.computadores = this.computadores.filter(computador => computador._id != id);
    });
  }
}
